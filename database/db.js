import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=admin`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.log('Database connection failed:', err);
    process.exit(1); 
  }
};
