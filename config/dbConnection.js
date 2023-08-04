import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.NODE_ENV === "development"
        ? process.env.MONGO_URI_LOCAL
        : process.env.MONGO_URI_EXTERNAL
    );
    console.log("DATABASE CONNECTED", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
