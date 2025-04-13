import express from 'express';
import { register, login, logout } from '../controllers/authControllers.js';
import {
  registerSchema,
  loginSchema,
} from '../utils/validators/authValidator.js';
import middlewares from '../middlewares.js';

const router = express.Router();

router.post('/register', middlewares.validateBody(registerSchema), register);
router.post('/login', middlewares.validateBody(loginSchema), login);
router.post('/logout', middlewares.protect, logout);

export default router;
