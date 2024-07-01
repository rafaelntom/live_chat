import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();

export const mongooseDBConnection = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI!);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to mongoDB: ${error}`);
    process.exit(1);
  }
};

app.listen(process.env.PORT || 5000, async () => {
  await mongooseDBConnection().then(() => {
    console.log(`Server is running on port: ${process.env.PORT || 5000} 🚀`);
  });
});
