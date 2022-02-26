import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';

const router = express.Router();
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

const contactEmail = nodemailer.createTransport({
    auth: {
        user: 'hayden@durandenterprises.com',
        password: process.env.EMAIL_PW
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log('Ready to send');
    }
})

const port = process.send.PORT || 5000;
app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${port}`));