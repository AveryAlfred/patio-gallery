import express, { Request, Response } from 'express';
import logger from './utils/logger';

import { userRouter } from './user/user.router';
import { sessionRouter } from './session/session.router';
import { plantRouter } from './plant/plant.router';

export const router = express.Router();

router.get('/healthcheck', (req: Request, res: Response) =>
  res.sendStatus(200)
);

router.use(userRouter);
router.use(sessionRouter);
router.use(plantRouter);
