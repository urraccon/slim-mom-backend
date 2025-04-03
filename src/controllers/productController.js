import { ProductModel } from '../models/Product.js';

export const getProducts = async (_, res, next) => {
  try {
    const Product = await ProductModel();
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
