import express from 'express';
import {
  addEntry,
  deleteEntry,
  getEntriesByDate,
  updateEntry,
} from '../controllers/diaryController.js';
import middlewares from '../middlewares.js';
import {
  dateSchema,
  diaryEntrySchema,
} from '../utils/validators/diaryValidator.js';

const router = express.Router();

router.get(
  '/date',
  middlewares.protect,
  middlewares.validate(dateSchema),
  getEntriesByDate
);
router.post(
  '/',
  middlewares.protect,
  middlewares.validate(diaryEntrySchema),
  addEntry
);
router.put(
  '/:id',
  middlewares.protect,
  middlewares.validate(diaryEntrySchema),
  updateEntry
);
router.delete('/:id', middlewares.protect, deleteEntry);

export default router;
