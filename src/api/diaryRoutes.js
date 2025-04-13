import express from 'express';
import {
  addEntry,
  deleteEntry,
  getEntriesByDate,
  updateEntry,
} from '../controllers/diaryController.js';
import middlewares from '../middlewares.js';
import { dateSchema, entrySchema } from '../utils/validators/diaryValidator.js';

const router = express.Router();

router.get(
  '/',
  middlewares.protect,
  middlewares.validateQuery(dateSchema),
  getEntriesByDate
);
router.post(
  '/',
  middlewares.protect,
  middlewares.validateBody(entrySchema),
  addEntry
);
router.put(
  '/:id',
  middlewares.protect,
  middlewares.validateBody(entrySchema),
  updateEntry
);
router.delete('/:id', middlewares.protect, deleteEntry);

export default router;
