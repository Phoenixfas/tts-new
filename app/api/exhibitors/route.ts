import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Exhibitor from "@/models/Exhibitor";
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
    await dbConnect();
    const exhibitors = await Exhibitor.find({}).sort({ company_name: 1 });

    return NextResponse.json({
        success: true,
        data: exhibitors,
    }, { status: 200 });
}

export async function POST(request: NextRequest) {
    
    try {    
        await dbConnect();
        const body = await request.json();
        const exhibitor = await Exhibitor.create(body);
        

        ////////////////////////////////// make a post request to /mail route to send email to vendor//////////////////////////////
        let mailDetails = {
            from: '"Afriopia" <afriopiacom@gmail.com>', // sender address
            to: exhibitor.email, // list of receivers
            subject: "Tech Trade Show - Booth Registration Confirmation and Payment", // Subject line
            text: "", // plain text body
            html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                    <title>Tech Trade Show - Booth Registration</title>
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
                        <h1>Tech Trade Show - Booth Registration</h1>
                    </div>
                    <p>Dear ${ exhibitor.first_name + ' ' + exhibitor.last_name },</p>
                    <p>Thank you for registering a booth for the upcoming Tech Trade Show hosted by Afriopia. We are excited to have you participate in our event and showcase your products and services to a diverse group of technology enthusiasts.</p>
                    <p>Please follow the link below to make your payment for your booth registration. Your booth will not be confirmed until payment is received. </p>
                    <a class='pay' href="http://checkout.chapa.co/checkout/web/payment/SC-64rPnD9YAep1">Make Payment</a>
                    <p>If you have any special requests, please let us know and we will do our best to accommodate them.</p>
                    <p>And if you have any questions, please don't hesitate to contact us at hello@afriopia.com. Our team will be happy to assist you.</p>
                    <p>Thank you and we look forward to seeing you at the Tech Trade Show!</p>
                    <p>Best,</p>
                    <p>The Afriopia Team</p>
                    </body>
                    </html>
                    `
        };

        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log('Error Occurs: ' + err);
            } else {
                console.log('Email sent successfully');
            }
        });
        
        return NextResponse.json({
            success: true,
            data: exhibitor
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Error Occured: " + error
        }, { status: 400 });
    }
}