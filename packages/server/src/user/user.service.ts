import config from 'config';
import argon2 from 'argon2';
import { nanoid } from 'nanoid';
import logger from '../utils/logger';

import { ddbClient } from '../utils/db';
import { CreateUserInput } from './user.schema';
import { User } from './user.model';

const table = config.get('db.table') as string

export const createUser = async (input: CreateUserInput) => {
  
  const userId = `USER#${nanoid()}`;
  const pwHash = await argon2.hash(input.password);

  const user: User = {
    pk: userId,
    sk: input.email,
    email: input.email,
    name: input.name,
    verified: false,
    password: pwHash,
    verificationCode: nanoid(),
    passwordResetCode: '',
  };

  const params = {
    TableName: table,
    Item: user,
  };

  await ddbClient.put(params);
  return user;
};

export const findUserById = async (input: string) => {

  const params = {
    TableName: table,
    Key: {input},
  };

  return await ddbClient.get(params)

};

export const findUserByEmail = async (input: string) => {
  const params = {
    TableName: table,
    Key: {input},
  };

  return await ddbClient.get({params, sk: email })
};
