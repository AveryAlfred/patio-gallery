import express, { Request, Response } from 'express';
import requireUser from '../utils/middleware/requireUser';
import validateResource from '../utils/middleware/validateResource';
import {
  createUserHandler,
  forgotPasswordHandler,
  getCurrentUserHandler,
  resetPasswordHandler,
  verifyUserHandler,
} from './user.controller';
import {
  createUserSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyUserSchema,
} from './user.schema';

export const userRouter = express.Router();

// Create user
userRouter.post(
  '/api/users',
  validateResource(createUserSchema),
  createUserHandler
);

// Verify user
userRouter.post(
  '/api/users/verify/:id/:verificationCode',
  validateResource(verifyUserSchema),
  verifyUserHandler
);

// Forgot password
userRouter.post(
  '/api/users/forgotpassword',
  validateResource(forgotPasswordSchema),
  forgotPasswordHandler
);

//Reset password
userRouter.post(
  '/api/users/resetpassword/:id/:passwordResetCode',
  validateResource(resetPasswordSchema),
  resetPasswordHandler
);

// Get current user
userRouter.get('/api/users/me', requireUser, getCurrentUserHandler);
