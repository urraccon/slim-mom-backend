import DiaryEntryModel from "../models/DiaryEntry.js";
import ProductModel from "../models/Product.js";

export const getProducts = async (req, res, next) => {
  try {
    const Product = await ProductModel();
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const addDiaryEntry = async (req, res, next) => {
  try {
    const { product, quantity } = req.body;
    const DiaryEntry = await DiaryEntryModel();
    const newDiaryEntry = new DiaryEntry({ product, quantity });

    await newDiaryEntry.save();
    res.status(201).json({
      message: "Diary entry added successfully!",
      diaryEntry: newDiaryEntry,
    });
  } catch (error) {
    next(error);
  }
};

export const updateDiaryEntry = async (req, res, next) => {
  try {
    const diaryId = req.params.id;
    const { product, quantity } = req.body;

    const DiaryEntry = await DiaryEntryModel();
    const updatedDiaryEntry = await DiaryEntry.findByIdAndUpdate(
      diaryId,
      { product, quantity },
      { new: true }
    );

    if (!updatedDiaryEntry) {
      return res.status(404).json({ message: "Diary entry not found" });
    }

    res.status(200).json({
      message: "Diary entry updated successfully!",
      diaryEntry: updatedDiaryEntry,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteDiaryEntry = async (req, res, next) => {
  try {
    const diaryId = req.params.id;

    const DiaryEntry = await DiaryEntryModel();
    const deletedDiaryEntry = await DiaryEntry.findByIdAndDelete(diaryId);
    if (!deletedDiaryEntry) {
      return res.status(404).json({ message: "Diary entry not found" });
    }

    res.status(204).json({
      message: "Diary entry deleted successfully!",
      diaryEntry: deletedDiaryEntry,
    });
  } catch (error) {
    next(error);
  }
};
