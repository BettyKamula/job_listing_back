import mongoose from 'mongoose';

const MONGO_URI = process.env.DATABASE_URI;
export const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log('Connected to mongodb');
  } catch (error) {
    console.error('Error connecting to mongodb', error);
  }
};
