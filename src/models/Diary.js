import mongoose from 'mongoose';
import initDB from '../config/db.js';
import { productSchema } from './Product.js';

const DiarySchema = new mongoose.Schema(
  {
    product: productSchema,
    quantity: Number,
    date: Date,
    user: mongoose.Schema.Types.ObjectId,
  },
  { versionKey: false }
);

const DiaryModel = async () => {
  const { diaryDB } = await initDB();
  return diaryDB.model('Diary', DiarySchema);
};

export default DiaryModel;
