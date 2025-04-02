import mongoose from "mongoose";
import connect from "../config/db.js";

let authDB;

const initDB = async () => {
  const { authDB: db } = await connect();
  authDB = db;
};

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true, versionKey: false }
);

const UserModel = async () => {
  await initDB();
  return authDB.model("User", userSchema);
};

export default UserModel;
