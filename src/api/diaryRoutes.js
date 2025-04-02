import express from "express";
import {
  addDiaryEntry,
  deleteDiaryEntry,
  getProducts,
  updateDiaryEntry,
} from "../controllers/diaryController.js";
import middlewares from "../middlewares.js";
import { diaryEntrySchema } from "../utils/validations/diaryValidator.js";

const router = express.Router();

router.get("/products", getProducts);
router.post(
  "/",
  middlewares.protect,
  middlewares.validate(diaryEntrySchema),
  addDiaryEntry
);
router.put(
  "/:id",
  middlewares.protect,
  middlewares.validate(diaryEntrySchema),
  updateDiaryEntry
);
router.delete("/:id", middlewares.protect, deleteDiaryEntry);

export default router;
