import express, { Request, Response } from 'express';
import { Disaster } from '../models/disaster';

const router = express.Router();

router.get('/api/disasters', async (req: Request, res: Response) => {
  const disasters = await Disaster.find();

  res.send(disasters);
});

export { router as indexDisasterRouter };
