import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import sendToMeRouter from './routes/sendToMe.js';

const router = express.Router();
dotenv.config();
const app = express();
app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API is running');
});
app.use('/sendtome', sendToMeRouter);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${port}`));