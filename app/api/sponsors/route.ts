import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Sponsor from "@/models/Sponsor";
import nodemailer from 'nodemailer';

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_TEST_USERNAME,
        pass: process.env.EMAIL_TEST_PWD
    },
    tls: {
        rejectUnauthorized: false
    }
});

export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const sponsor = await Sponsor.find({});

        return NextResponse.json({
            success: true,
            data: sponsor,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}

export async function POST(request: NextRequest) {
    try{
        await dbConnect();
        const body = await request.json();
        const sponsor = await Sponsor.create(body);
        
        const mailDetails = {
            from: '"Afriopia" <afriopiacom@gmail.com>',
            to: sponsor.email,
            subject: "Tech Trade Show - Sponsorship Registration Confirmation",
            text: "",
            html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                        <title>Tech Trade Show - Sponsorship Registration Confirmation</title>
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
                            .qr {
                                width: 200px;
                                height: 200px;
                            }
                            .container {
                                max-width: 800px;
                                margin: 0 auto;
                            }
                        </style>
                    </head>
                    <body>
                        <div align="center">
                            <a href="https://techtradeshow.tech"><img class="logo" src="https://res.cloudinary.com/drp73bqti/image/upload/v1730051512/afriopia/tts_logo_sya4hv.png" alt="tts"></a>
                            <h1>Tech Trade Show - Sponsorship Registration Confirmation</h1>
                        </div>

                        <p>Dear ${ sponsor.first_name + ' ' + sponsor.last_name },</p>

                        <p>Thank you for registering as a sponsor for the upcoming Tech Trade Show. We are excited to have you participate in our event and showcase your products and services to a diverse group of tech savvys.</p>

                        <p>If you have any special requests, please let us know and we will do our best to accommodate them.</p>
                        <p>And if you have any questions, please don't hesitate to contact us at hello@techtradeshow.tech. Our team will be happy to assist you.</p>
                        <p>Thank you and we look forward to seeing you at the Tech Trade Show!</p>
                        <p>Best,</p>
                        <p>The TTS Team</p>
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
            data: sponsor
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 500 });
    }
}