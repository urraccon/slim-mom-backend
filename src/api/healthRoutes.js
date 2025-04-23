import express from 'express';
import middlewares from '../middlewares.js';
import {
  calculateHealthData,
  saveHealthData,
} from '../controllers/healthController.js';
import { healthDataSchema } from '../schemas/joi/healthSchemas.js';

const router = express.Router();

/**
 * @swagger
 * /health/save:
 *  post:
 *    tags:
 *      - Health
 *    summary: Save health data
 *    description: Saves user health data and returns the updated user object including recommended calories and restricted foods
 *    operationId: saveHealthData
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/HealthDataBody'
 *    responses:
 *      200:
 *        description: Health data saved successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Bad request - validation failed
 *      401:
 *        description: Unauthorized - missing or invalid credentials
 *      500:
 *        description: Internal server error
 */
router.post(
  '/save',
  middlewares.protect,
  middlewares.validateBody(healthDataSchema),
  saveHealthData
);

/**
 * @swagger
 * /health/calculate:
 *  post:
 *    tags:
 *      - Health
 *    summary: Calculate health data
 *    description: Returns recommended daily calories and restricted foods list based on health information
 *    operationId: calculateHealthData
 *    security: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/HealthDataBody'
 *    responses:
 *      200:
 *        description: Health data calculated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/HealthData'
 *      400:
 *        description: Bad request - validation failed
 *      500:
 *        description: Internal server error
 */
router.post(
  '/calculate',
  middlewares.validateBody(healthDataSchema),
  calculateHealthData
);

export default router;
