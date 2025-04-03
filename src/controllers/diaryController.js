import DiaryModel from '../models/Diary.js';

export const getEntriesByDate = async (req, res, next) => {
  const selectedDate = req.body.date;
  const { userId } = req.user;

  const date = new Date(selectedDate);
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  const endOfDay = new Date(date.setHours(23, 59, 59, 999));

  try {
    const Diary = await DiaryModel();
    const entries = await Diary.find({
      user: userId,
      date: { $gte: startOfDay, $lte: endOfDay },
    });

    res.json(entries);
  } catch (error) {
    next(error);
  }
};

export const addEntry = async (req, res, next) => {
  const { product, quantity } = req.body;
  const { userId } = req.user;

  try {
    const Diary = await DiaryModel();
    const newEntry = new Diary({ product, quantity, user: userId });

    await newEntry.save();

    res.status(201).json({
      message: 'Diary entry added successfully',
      entry: newEntry,
    });
  } catch (error) {
    next(error);
  }
};

export const updateEntry = async (req, res, next) => {
  const entryId = req.params.id;
  const { product, quantity } = req.body;
  const { userId } = req.user;

  try {
    const Diary = await DiaryModel();
    const entry = await Diary.findById(entryId);

    if (!entry) {
      return res.status(404).json({ message: 'Diary entry not found' });
    }

    if (entry.user.toString() !== userId.toString()) {
      return res
        .status(401)
        .json({ message: 'Unauthorized to update this entry' });
    }

    entry.product = product;
    entry.quantity = quantity;
    await entry.save();

    res.status(200).json({
      message: 'Diary entry updated successfully',
      entry,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEntry = async (req, res, next) => {
  const entryId = req.params.id;
  const { userId } = req.user;

  try {
    const Diary = await DiaryModel();
    const entry = await Diary.findById(entryId);

    if (!entry) {
      return res.status(404).json({ message: 'Diary entry not found' });
    }

    if (entry.user.toString() !== userId.toString()) {
      return res
        .status(401)
        .json({ message: 'Unauthorized to delete this entry' });
    }

    await entry.remove();

    res.status(204).json({
      message: 'Diary entry deleted successfully',
      entry: entry,
    });
  } catch (error) {
    next(error);
  }
};
