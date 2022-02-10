import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import logger from '../logger';

export const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      logger.info(`validation passed`);
      next();
    } catch (e: any) {
      logger.info(`validation failed`);
      return res.status(400).send(e.errors);
    }
  };
