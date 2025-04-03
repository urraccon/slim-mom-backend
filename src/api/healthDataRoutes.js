import express from 'express';
import middlewares from '../middlewares.js';
import {
  calculateHealthData,
  saveHealthData,
} from '../controllers/healthDataController.js';
import { healthDataSchema } from '../utils/validators/healthDataValidator.js';

const router = express.Router();

router.post(
  '/',
  middlewares.protect,
  middlewares.validate(healthDataSchema),
  saveHealthData
);
router.post(
  '/calculate',
  middlewares.validate(healthDataSchema),
  calculateHealthData
);

export default router;
