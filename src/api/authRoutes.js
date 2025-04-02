import express from "express";
import { register, login, logout } from "../controllers/authControllers.js";
import {
  registerSchema,
  loginSchema,
} from "../utils/validations/authValidator.js";
import middlewares from "../middlewares.js";

const router = express.Router();

router.post("/register", middlewares.validate(registerSchema), register);
router.post("/login", middlewares.validate(loginSchema), login);
router.post("/logout", middlewares.protect, logout);

export default router;
