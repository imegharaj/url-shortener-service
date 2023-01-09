import mongoose from 'mongoose';
import logger from '../utils/logger';

const getMongoURI = () => {
  return `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
};

const connectMongoDB = async () => {
  mongoose.set('strictQuery', false);
  try {
    await mongoose.connect(getMongoURI()).then(() => {
      logger.info('MongoDB Connected Successfully');
    });
  } catch (e) {
    logger.error('Mongo Failed To Connect', e);
  }
};

export default connectMongoDB;
