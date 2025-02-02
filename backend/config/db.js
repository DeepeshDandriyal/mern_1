import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error : ${err.message}`);
    process.exit(1); //process code 1  means exit with failure 0 means success
  }
};
