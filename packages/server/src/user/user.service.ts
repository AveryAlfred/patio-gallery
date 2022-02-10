import 'dotenv/config';
import logger from '../utils/logger';
import { ddbClient } from '../utils/db';
import { nanoid } from 'nanoid';
import { CreateUserInput } from './user.schema';
import argon2 from 'argon2';

import { User } from './user.model';

const TABLE = process.env.TABLE;

export const createUser = async (input: CreateUserInput) => {
  
  const userId = `USER#${nanoid()}`;
  const pwHash = await argon2.hash(input.password);

  const user: User = {
    pk: userId,
    sk: userId,
    email: input.email,
    name: input.name,
    verified: false,
    password: pwHash,
    verificationCode: nanoid(),
    passwordResetCode: '',
  };

  const params = {
    TableName: TABLE,
    Item: user,
  };

  await ddbClient.put(params);
  return user;
};

export const findUserById = async (input: string) => {

  const params = {
    TableName: TABLE,
    Key: {input},
  };

  return await ddbClient.get(params)

};

export const findUserByEmail = async (input: string) => {
  const params = {
    TableName: TABLE,
    Key: {input},
  };

  return await ddbClient.get({params, sk: email })
};
