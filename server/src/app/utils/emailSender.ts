import config from "../../config";
import nodemailer from "nodemailer"

const emailSender = async (email: string, html: any) => {


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: config.emailSender.email,
            pass: config.emailSender.password,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: '"Health care" <shihabuddindevelopper@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Reset your password ", // Subject line
        text: "Hello user reset your password hare", // plain text body
        html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default emailSender