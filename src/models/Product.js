import mongoose from "mongoose";
import connect from "../config/db.js";

let diaryDB;

const initDB = async () => {
  const { diaryDB: db } = await connect();
  diaryDB = db;
};

const productSchema = new mongoose.Schema(
  {
    categories: String,
    weight: Number,
    title: String,
    calories: Number,
    groupBloodNotAllowed: [Boolean],
  },
  { versionKey: false }
);

const ProductModel = async () => {
  await initDB();
  return diaryDB.model("Product", productSchema);
};

export default ProductModel;
