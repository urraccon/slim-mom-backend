import express from 'express';
import middlewares from '../middlewares.js';
import {
  calculateHealthData,
  saveHealthData,
} from '../controllers/healthController.js';
import { healthDataSchema } from '../utils/validators/healthValidator.js';

const router = express.Router();

router.post(
  '/save',
  middlewares.protect,
  middlewares.validateBody(healthDataSchema),
  saveHealthData
);
router.post(
  '/calculate',
  middlewares.validateBody(healthDataSchema),
  calculateHealthData
);

export default router;
