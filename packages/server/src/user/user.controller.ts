import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import logger from '../utils/logger';
import { sendEmail } from '../utils/mailer';
import {
  CreateUserInput,
  ForgotPasswordInput,
  ResetPasswordInput,
  VerifyUserInput,
} from './user.schema';
import { createUser, findUserByEmail, findUserById } from './user.service';

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) => {
  try {
    // create user
    const user = await createUser(req.body);
    // send verification email
    await sendEmail({
      to: user.email,
      from: 'test@example.com',
      subject: 'Verify your email',
      text: `verification code: ${user.verificationCode}. Id: ${user.pk}`,
    });
    return res.send('User succesfully created');
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(409).send('Account already exists');
    }
    return res.status(500).send(e);
  }
};

export const verifyUserHandler = async (
  req: Request<VerifyUserInput>,
  res: Response
) => {};

export const forgotPasswordHandler = async (
  req: Request<{}, {}, ForgotPasswordInput>,
  res: Response
) => {};

export const resetPasswordHandler = async (
  req: Request<ResetPasswordInput['params'], {}, ResetPasswordInput['body']>,
  res: Response
) => {};

export const getCurrentUserHandler = async (req: Request, res: Response) => {
  return res.send(res.locals.user);
};
