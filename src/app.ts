import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import connectMongoDB from './config/db';

// Create Express server
const app = express();

// Initialize Config
dotenv.config();

// Connect to MongoDB
connectMongoDB();

// Express configuration
app.set('port', process.env.SERVER_PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

export default app;
