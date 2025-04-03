import UserModel from '../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generateToken.js';

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const User = await UserModel();
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res
      .status(201)
      .cookie('token', generateToken(user._id), { httpOnly: true })
      .json({ message: 'User registered successfully', user });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const User = await UserModel();
    const user = await User.findOne({ email });
    if (!user || !bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res
      .cookie('token', generateToken(user._id), { httpOnly: true })
      .json({ message: 'Logged in successfully', user });
  } catch (error) {
    next(error);
  }
};

export const logout = (_, res, next) => {
  try {
    res.clearCookie('token').json({ message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};
