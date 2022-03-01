import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

const sendToMeRouter = express.Router();
dotenv.config();

const transport = {
    host: 'smtp.office365.com',
    port: 587,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS
    },
    secureConnection: false,
    tls: {
        ciphers: 'SSLv3'
    }
};

const transporter = nodemailer.createTransport(transport);
    transporter.verify((error, success) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log('ready to send')
        }
    });

sendToMeRouter.post('/', (req, res, next) => {
    const mail = {
        from: process.env.USER_EMAIL,
        to: 'hayden@durandenterprises.com',
        subject: req.body.subject,
        text: `
            from: ${req.body.name}
            contact: ${req.body.email}
            message: ${req.body.text}`
    }
    
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({ status: 'fail' });
        }
        else {
            res.json({ status: 'success' });
        }
    })
});

export default sendToMeRouter;