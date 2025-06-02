import nodemailer from 'nodemailer'

const mailSender = async (email, title, body) => {
    try {
        // create transporter to send the mail
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });

        // send email to the user
        let info = await transporter.sendMail({
            from: 'PrtCareCommunity - Sunil Sahoo',
            to: email,
            subject: title,
            html: body,
        });
        console.log("Email info: ", info);
        return info;
    } catch (error) {
        console.log(error.message)
    }
}

export default mailSender