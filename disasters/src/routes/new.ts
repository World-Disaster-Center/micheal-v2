import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@chmat/common';
import { Disaster } from '../models/disaster';
import { DisasterCreatedPublisher } from '../events/publishers/disaster-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/disasters',
  requireAuth,
  [body('name').not().isEmpty().withMessage('Name is required')],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name } = req.body;
    const disaster = Disaster.build({
      name,
      userId: req.currentUser!.id,
    });

    await disaster.save();
    await new DisasterCreatedPublisher(natsWrapper.client).publish({
      id: disaster.id,
      name: disaster.name,
      userId: disaster.userId,
      version: disaster.version,
    });

    res.status(201).send(disaster);
  }
);

export { router as createDisasterRouter };
