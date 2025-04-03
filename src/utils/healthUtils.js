import logger from '../config/logger.js';
import { ProductModel } from '../models/Product.js';

export const calculateCalories = (
  height,
  age,
  currentWeight,
  desiredWeight
) => {
  const bmr = 10 * currentWeight + 6.25 * height - 5 * age + 5;
  const dailyCalories = Math.round(bmr * 1.2);
  const calorieDeficit = (currentWeight - desiredWeight) * 100;
  return Math.max(dailyCalories - calorieDeficit, 1200);
};

export const getRestrictedFoods = async (bloodType) => {
  try {
    const Product = await ProductModel();
    const products = await Product.find({
      $expr: {
        $eq: [{ $arrayElemAt: ['$groupBloodNotAllowed', bloodType] }, true],
      },
    });
    return products;
  } catch (error) {
    logger.error('Error fetching restricted foods:', error);
    return [];
  }
};
