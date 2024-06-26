import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const mongooseDBConnection = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI!);
    console.log("🎉 Successfully connected to MongoDB 🎉");
  } catch (error) {
    console.error(`Error connecting to mongoDB: ${error}`);
    process.exit(1);
  }
};
