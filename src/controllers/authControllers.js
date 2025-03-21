import dotenv from 'dotenv';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {return res.status(409).json({ message: 'Email already exists' });}

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {return res.status(401).json({ message: 'Invalid credentials' });}

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
    {return res.status(401).json({ message: 'Invalid credentials' });}

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res
      .cookie('token', token, { httpOnly: true })
      .json({ message: 'Logged in successfully' });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res.clearCookie('token').json({ message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};
