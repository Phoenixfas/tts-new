import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Message from "@/models/Message";
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
        const body = await request.json();
        const message = await Message.create(body);
        

        ////////////////////////////////// make a post request to /mail route to send email to vendor//////////////////////////////
        let mailDetails = {
            from: `"TTS Website" <${process.env.EMAIL_TEST_USERNAME}>`, // sender address
            to: process.env.EMAIL_TEST_USERNAME, // list of receivers
            subject: "Message from TTS Website", // Subject line
            text: "", // plain text body
            html: `
                    <html>
                    <head>
                    <style>
                        /* Add some styling to the email */
                        body {
                            font-family: Arial, sans-serif;
                            margin: 30px;
                        }
                        h1 {
                            color: #333333;
                        }
                        p {
                            line-height: 1.5;
                        }
                        a {
                            color: #489b42;
                        }
                        img {
                            width: 150px;
                            height: 150px;
                        }
                        .pay{
                            background-color: #489b42;
                            border: 3px solid #0b5b05; 
                            color: #fff;
                            text-decoration: none;
                            padding: 5px 20px;
                            border-radius: 5px;
                            margin: 20px 0px;
                        }
                    </style>
                    </head>
                    <body>
                        <div align="center">
                            <img src="https://res.cloudinary.com/drp73bqti/image/upload/v1730051512/afriopia/tts_logo_sya4hv.png" alt="TTS Logo">
                        </div>
                        <p>Name: ${ message.name },</p>
                        ${message.phone && `<p>Phone: ${ message.phone },</p>`}
                        <p>Email: ${ message.email },</p>
                        <p>Message: ${ message.message }</p>
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
            data: message
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: "Error Occured: " + error.message // Convert error to string
        }, { status: 400 });
    }
}