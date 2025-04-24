import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

if (process.env.NODE_ENV !== 'production') {
  import('dotenv').then((dotenv) => dotenv.config());
}

import middlewares from './middlewares.js';
import api from './api/index.js';
import { swaggerSpec, swaggerUI } from './config/swagger.js';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api', api);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
