const functions = require("firebase-functions");
const express = require('express');
const sendToMeRouter = express();
require('dotenv').config({ path: 'functions/.env' });
const cors = require('cors');
const morgan = require('morgan');
const nodemailer = require('nodemailer');

sendToMeRouter.use(morgan('dev'));

sendToMeRouter.use(cors());
sendToMeRouter.use(express.json());
sendToMeRouter.get('/', (req, res) => {
    console.log(req);
    res.send('Index route running');
})
sendToMeRouter.get('/sendtome', (req, res) => {
    console.log(`sendtome req: ${req}`);
    res.send('API is running');
});

const transport = {
    host: 'smtp.office365.com',
    port: 587,
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASS}`
    },
    secure: false,
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
            console.log(success, 'ready to send')
        }
    });

sendToMeRouter.post('/sendtome', (req, res, next) => {
    const mail = {
        from: process.env.EMAIL,
        to: 'hayden@durandenterprises.com',
        subject: req.body.subject,
        text: `
            From: ${req.body.name}
            Contact: ${req.body.email}
            Message: ${req.body.text}`
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

const port = process.env.PORT || 5000;
sendToMeRouter.listen(port);

exports.api = functions.https.onRequest(sendToMeRouter);
