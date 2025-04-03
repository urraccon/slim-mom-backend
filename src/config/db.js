import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from './logger.js';

dotenv.config();

const connectDB = async () => {
  try {
    const mainConnection = await mongoose.connect(process.env.MONGO_MAIN_URI);
    logger.info('MongoDB Connected');

    const authDB = mainConnection.connection.useDb('auth');
    const diaryDB = mainConnection.connection.useDb('diary');

    return { authDB, diaryDB };
  } catch (error) {
    logger.error('Database Connection Failed:', error);
    process.exit(1);
  }
};

const initDB = async () => {
  const { authDB, diaryDB } = await connectDB();
  return { authDB, diaryDB };
};

export default initDB;
