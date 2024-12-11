import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import { marked } from 'marked';
import Subscriber from "@/models/Subscriber";
import nodemailer from 'nodemailer';

let mailTransporter = nodemailer.createTransport({
    host: process.env.EMAIL_TEST_HOST, // Replace with your SMTP server
    port: 465,                  // Use 465 for SSL or 587 for TLS
    secure: true,
    auth: {
        user: process.env.EMAIL_TEST_USERNAME,
        pass: process.env.EMAIL_TEST_PWD
    },
    tls: {
        rejectUnauthorized: false
    }
});

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const { image, markdown } = await request.json();
        const sanitizedHtml = markdown ? marked.parse(markdown) : '';
        const subscribers = await Subscriber.find();

        const mailDetails = {
            from: `"Tech Trade Show" <${process.env.EMAIL_TEST_USERNAME}>`,
            to: subscribers.map(subscriber => subscriber.email),
            subject: "Tech Trade Show Newsletter",
            text: "",
            html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                        <title>Tech Trade Show Newsletter</title>
                        <style>
                            body {
                                margin: 0;
                                padding: 30px;
                                background-color: #f2f2f2;
                                font-family: 'Poppins', sans-serif;
                                color: #131616;
                            }
                            .logo {
                                width: 200px;
                                height: 150px;
                                object-fit: contain;
                            }
                            .container {
                                max-width: 800px;
                                margin: 0 auto;
                            }
                            .details {
                                padding: 30px;
                                background-color: #fff;
                                border-radius: 10px;
                            }
                            .details h1 {
                                font-size: 2rem;
                                font-weight: 700;
                                margin-bottom: 20px;
                            }
                            .details p {
                                font-size: 1.2rem;
                                font-weight: 400;
                                margin-bottom: 20px;
                            }
                            .details a {
                                text-decoration: none;
                                color: #fff;
                                background-color: #131616;
                                padding: 10px 20px;
                                border-radius: 5px;
                            }
                            .details img {
                                max-width: 100%;
                                max-height: 100%;
                                object-fit: contain;
                                border-radius: 10px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div style="text-align: center;">
                                <a href="https://afriopia.com"><img class="logo" src="https://res.cloudinary.com/drp73bqti/image/upload/v1730051512/afriopia/tts_logo_sya4hv.png" alt="tts"></a>
                            </div>
                            <div class="details">
                                ${image ? `<img src="${image}" alt="image">` : ''}
                                ${sanitizedHtml}
                            </div>
                        </div>
                    </body>
                    </html>
                `
        };
        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
        
        return NextResponse.json({
            success: true,
            data: subscribers
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error
        }, { status: 500 });
    }
}