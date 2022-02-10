import express, { Express, Request, Response } from 'express';
import { validateResource } from '../utils/middleware/validateResource';
import {
  createSessionHandler,
  refreshAccessTokenHandler,
} from './session.controller';
import { createSessionSchema } from './session.schema';

export const sessionRouter = express.Router();

// Create session
sessionRouter.post(
  '/api/sessions',
  validateResource(createSessionSchema),
  createSessionHandler
);

// Refresh session
sessionRouter.post('/api/sessions/refresh', refreshAccessTokenHandler);
