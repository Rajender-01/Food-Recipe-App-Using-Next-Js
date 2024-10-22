import { clsx, type ClassValue } from "clsx";
import mongoose from "mongoose";
import { CredentialsSignin } from "next-auth";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const connectToDatabase = async () => {
  try {
    if (mongoose.connections && mongoose.connections[0].readyState) return;

    const { connection } = await mongoose.connect(
      // process.env.MONGO_URI as string,
      "mongodb+srv://kumarrajender:3a9ErYKjKeGst5EI@nextauth.dm4sq.mongodb.net/",
      {
        dbName: "nextAuth",
      }
    );
    console.log(`Connected to database: ${connection.host}`);
  } catch (error) {
    const err = error as CredentialsSignin;
    throw new Error("Error connecting to database", err);
  }
};
