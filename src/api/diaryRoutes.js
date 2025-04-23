import express from 'express';
import {
  addEntry,
  deleteEntry,
  getEntriesByDate,
  updateEntry,
} from '../controllers/diaryController.js';
import middlewares from '../middlewares.js';
import { dateSchema, entrySchema } from '../schemas/joi/diarySchemas.js';

const router = express.Router();

/**
 * @swagger
 * /diary:
 *  get:
 *    summary: Get diary entries for a specific date
 *    description: Returns all entries for the current user on a given date
 *    operationId: getEntriesByDate
 *    tags:
 *      - Diary
 *    parameters:
 *      - name: date
 *        in: query
 *        required: true
 *        schema:
 *          type: string
 *          format: date-time
 *          example: "2025-04-23T12:00:00.000Z"
 *        description: ISO-formatted date
 *    responses:
 *      200:
 *        description: Entries for the given date
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Diary'
 *      400:
 *        description: Bad request - validation failed
 *      401:
 *        description: Unauthorized - missing or invalid credentials
 *      500:
 *        description: Internal server error
 */
router.get(
  '/',
  middlewares.protect,
  middlewares.validateQuery(dateSchema),
  getEntriesByDate
);

/**
 * @swagger
 * /diary:
 *  post:
 *    summary: Add a diary entry
 *    description: Creates a new diary entry for the authenticated user, using the provided product, quantity and date
 *    operation: addDiaryEntry
 *    tags:
 *      - Diary
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/EntryBody'
 *    responses:
 *      201:
 *        description: Diary entry added successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Diary entry added successfully
 *                entry:
 *                  $ref: '#/components/schemas/Diary'
 *      400:
 *        description: Bad request - validation failed
 *      401:
 *        description: Unauthorized - missing or invalid credentials
 *      500:
 *        description: Internal server error
 */
router.post(
  '/',
  middlewares.protect,
  middlewares.validateBody(entrySchema),
  addEntry
);

/**
 * @swagger
 * /diary/{id}:
 *  patch:
 *    summary: Update an existing diary entry
 *    description: Allows an authenticated user to update a specific diary entry by its ID
 *    operationId: updateEntry
 *    tags:
 *      - Diary
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the diary entry to update
 *        required: true
 *        schema:
 *          type: string
 *          example: 6610123abc1234567890def1
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/EntryBody'
 *    responses:
 *      200:
 *        description: Diary entry updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Diary entry updated successfully
 *                entry:
 *                  $ref: '#/components/schemas/Diary'
 *      400:
 *        description: Bad request - validation failed
 *      401:
 *        description: Unauthorized - missing or invalid credentials
 *      404:
 *        description: Diary entry not found
 *      500:
 *        description: Internal server error
 */
router.patch(
  '/:id',
  middlewares.protect,
  middlewares.validateBody(entrySchema),
  updateEntry
);

/**
 * @swagger
 * /diary/{id}:
 *  delete:
 *    summary: Delete a diary entry
 *    description: Allows an authenticated user to delete a specific diary entry by its ID
 *    operationId: deleteEntry
 *    tags:
 *      - Diary
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the diary entry to delete
 *        required: true
 *        schema:
 *          type: string
 *          example: 6610123abc1234567890def1
 *    responses:
 *      204:
 *        description: Diary entry deleted successfully
 *      401:
 *        description: Unauthorized - missing or invalid credentials
 *      404:
 *        description: Diary entry not found
 *      500:
 *        description: Internal server error
 */
router.delete('/:id', middlewares.protect, deleteEntry);

export default router;
