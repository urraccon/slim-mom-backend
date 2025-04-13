import mongoose from 'mongoose';
import initDB from '../config/db.js';
import { productSchema } from './Product.js';

const healthDataSchema = new mongoose.Schema({
  height: Number,
  age: Number,
  currentWeight: Number,
  desiredWeight: Number,
  bloodType: Number,
  recommendedCalories: Number,
  restrictedFoods: [productSchema],
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    healthData: healthDataSchema,
  },
  { versionKey: false }
);

const UserModel = async () => {
  const { authDB } = await initDB();
  return authDB.model('User', userSchema);
};

export default UserModel;
