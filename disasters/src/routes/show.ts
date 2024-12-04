import express, { Request, Response } from 'express';
import { NotfoundError } from '@chmat/common';
import { Disaster } from '../models/disaster';

const router = express.Router();

router.get('/api/disasters/:id', async (req: Request, res: Response) => {
  const disaster = await Disaster.findById(req.params.id);

  if (!disaster) {
    throw new NotfoundError();
  }

  res.send(disaster);
});

export { router as showDisasterRouter };
