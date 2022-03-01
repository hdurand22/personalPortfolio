import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';

const router = express.Router();
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API is running');
});

const contactEmail = nodemailer.createTransport({
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
});

contactEmail.verify((error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log('Ready to send');
    }
})

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const mail = {
        from: name,
        to: process.env.USER_EMAIL,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "Something went wrong. Please try again." });
        }
        else {
            res.json({ status: "Message sent" });
        }
    })
} )

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${port}`));