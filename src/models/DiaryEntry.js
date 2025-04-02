import mongoose from "mongoose";
import connect from "../config/db.js";

let diaryDB;

const initDB = async () => {
  const { diaryDB: db } = await connect();
  diaryDB = db;
};

const DiaryEntrySchema = new mongoose.Schema(
  {
    product: {
      _id: mongoose.Schema.Types.ObjectId,
      categories: String,
      weight: Number,
      title: String,
      calories: Number,
      groupBloodNotAllowed: [Boolean],
    },
    quantity: Number,
    date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const DiaryEntryModel = async () => {
  await initDB();
  return diaryDB.model("DiaryEntry", DiaryEntrySchema);
};

export default DiaryEntryModel;
