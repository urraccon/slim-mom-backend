import express from "express";

import authRoutes from "./authRoutes.js";
import diaryRoutes from "./diaryRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/diary", diaryRoutes);

export default router;
