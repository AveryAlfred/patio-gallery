import 'dotenv/config';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { router } from '../router';
import deserializeUser from './middleware/deserializeUser';

export const createServer = (): Application => {
  const app = express();

  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );

  app.use(cookieParser());
  app.use(express.json());
  app.use(deserializeUser);
  app.use(router);

  return app;
};
