import mongoose from "mongoose";

let isConnected = false; //variable to check connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MongoDB url Not found");
  if (isConnected) return console.log("Already Connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error Found \n" + error);
  }
};
