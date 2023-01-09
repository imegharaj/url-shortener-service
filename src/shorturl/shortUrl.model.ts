import mongoose, { Document } from 'mongoose';
import shortid from 'shortid';

export interface IShortURL extends Document {
  urlId: string;
  fullUrl: string;
}

const schema = new mongoose.Schema({
  urlId: {
    type: String,
    unique: true,
    required: true,
    default: () => shortid.generate(),
  },
  fullUrl: { type: String, required: true },
});

const shortUrl = mongoose.model<IShortURL>('ShortUrl', schema);

export default shortUrl;
