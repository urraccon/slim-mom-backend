import app from './app.js';
import logger from './config/logger.js';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`Listening: http://localhost:${port}`);
});
