import mongoose from 'mongoose';
import { authDB } from '../config/db.js';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = authDB.model('User', userSchema);
export default User;
