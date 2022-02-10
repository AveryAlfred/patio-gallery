import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import logger from './logger';

const client = new DynamoDBClient({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
  credentials: {
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secreteAccessKey',
  },
});

export const ddbClient = DynamoDBDocument.from(client);
