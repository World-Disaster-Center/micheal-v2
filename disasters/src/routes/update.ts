import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validateRequest,
  NotfoundError,
  NotAuthorizedError,
} from '@chmat/common';
import { Disaster } from '../models/disaster';
import { DisasterUpdatedPublisher } from '../events/publishers/disaster-updated-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/disaster/:id',
  requireAuth,
  [body('name').not().isEmpty().withMessage('Disaster is required')],
  validateRequest,
  async (req: Request, res: Response) => {
    const disaster = await Disaster.findById(req.params.id);

    if (!disaster) {
      throw new NotfoundError();
    }

    if (disaster.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    disaster.set({
      name: req.body.name,
    });
    await disaster.save();
    await new DisasterUpdatedPublisher(natsWrapper.client).publish({
      id: disaster.id,
      name: disaster.name,
      userId: disaster.userId,
      version: disaster.version,
    });

    res.send(disaster);
  }
);

export { router as updateDisasterRouter };
