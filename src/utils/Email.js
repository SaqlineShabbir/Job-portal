import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER_NAME,
        pass: process.env.SMTP_USER_PASSWORD
    },
});

const mailer = async (maildata) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER_NAME,
            to: maildata.email,
            subject: maildata.subject,
            html: maildata.html
        })
    } catch (err) {
        console.log(err.message)
    }
};

export default mailer;