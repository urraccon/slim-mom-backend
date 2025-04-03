import mongoose from 'mongoose';
import initDB from '../config/db.js';

const productSchema = new mongoose.Schema({
  categories: String,
  weight: Number,
  title: String,
  calories: Number,
  groupBloodNotAllowed: [Boolean],
});

const ProductModel = async () => {
  const { diaryDB } = await initDB();
  return diaryDB.model('Product', productSchema);
};

export { ProductModel, productSchema };
