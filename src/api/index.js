import express from 'express';
import authRoutes from './authRoutes.js';
import diaryRoutes from './diaryRoutes.js';
import productRoutes from './productRoutes.js';
import userHealthRoutes from './healthDataRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/diary', diaryRoutes);
router.use('/product', productRoutes);
router.use('/health', userHealthRoutes);

export default router;
