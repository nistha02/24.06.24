import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URL;
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
