import logger from './utils/logger';
import { createServer } from './utils/server';
import 'dotenv/config'

const port = process.env.PORT;
export const app = createServer();

app.listen(port, async () => {
  logger.info(`express app listening @ localhost:${port}`);
});
