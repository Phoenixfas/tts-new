import { NextResponse, NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";
import Transaction from "@/models/Transaction";
import nodemailer from 'nodemailer';
import QRCode from 'qrcode';

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
    const signedToken = request.headers.get('signed-token');
    
    if (!process.env.SANTIMPAY_PUBLIC_KEY) {
        throw new Error('payment public key is not defined');
    }

    const publicKey = Buffer.from(process.env.SANTIMPAY_PUBLIC_KEY, 'base64').toString('utf8');
    const body = await request.json();

    try {
        await dbConnect();
        // Verify the token
        if (!signedToken) {
            throw new Error('Signed token is missing');
        }
        if (!publicKey) {
            throw new Error('Public key is missing');
        }
        const verifiedPayload: any = jwt.verify(signedToken, publicKey, { algorithms: ['ES256'] });

        // Process the transaction based on `verifiedPayload`
        // check if user exists in the database by user's id with thirdPartyId from verifiedPayload
        const visitor = await Visitor.findOne({ _id: verifiedPayload?.thirdPartyId });

        if (!visitor) {
            throw new Error('Visitor not found');
        }

        // Generate QR code as a buffer
        const qrCodeBuffer = await QRCode.toBuffer(visitor.id, { 
            version: 10, 
            errorCorrectionLevel: 'H', 
            width: 600, 
            margin: 2 
        });
        const base64Image = qrCodeBuffer.toString('base64');
        const formData = new FormData();
        formData.append('source', base64Image);
        formData.append('key', '6d207e02198a847aa98d0a2a901485a5');

        const imgResponse = await fetch("https://freeimage.host/api/1/upload", {
            method: 'POST',
            body: formData,
        });

        // Parse the JSON response
        const imgData = await imgResponse.json();

        if (verifiedPayload?.Status === 'COMPLETED') {
            visitor.paymentStatus = 'completed';
            visitor.paymentDetails = verifiedPayload;

            // Update the visitor's payment status and details
            await visitor.save();
            const newTransaction = await Transaction.create(body);

            // Send email to the visitor
            let mailDetails = {
                from: `"Tech Trade Show" <${process.env.EMAIL_TEST_USERNAME}>`, // sender address
                to: visitor.email, // list of receivers
                subject: "Tech Trade Show - VIP Ticket Confirmation", // Subject line
                text: "", // plain text body
                attachments: [
                    {
                        filename: "qr-code.png",
                        content: qrCodeBuffer, // Attach the buffer
                    },
                ],
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            margin: 0;
                            font-family: 'Arial', sans-serif;
                            color: #050752;
                            line-height: 1.6;
                        }

                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                            text-align: center;
                        }

                        .header {
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: linear-gradient(to top right, #050752, #4eaee5, #78e0f4);
                            border-radius: 4px;
                            overflow: hidden;
                        }

                        .header img {
                            position: relative;
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                        }

                        .title {
                            margin: 20px 0 0;
                        }
                        .title h1 {
                            color: #050752;
                            font-size: 2rem;
                            margin-bottom: 0;
                        }
                        .title p {
                            color: #4eaee5;
                            font-size: 0.9rem;
                        }
                        .welcome {
                            margin: 20px 0;
                            text-align: left;
                            border-radius: 4px;
                        }
                        .welcome p {
                            padding: 20px 0;
                            color: #050752;
                            font-size: 0.9rem;
                        }
                        .ticket{
                            position: relative;
                            margin: 20px 0;
                            border-radius: 4px;
                            overflow: hidden;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            justify-content: center;
                            background: url('https://iili.io/2NlH4OQ.jpg') no-repeat center center/cover;
                            color: #fff;
                        }
                        .ticket-bg{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: #00000088;
                            border-radius: 8px;
                        }
                        .ticket-bg img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        .ticket-l {
                            position: relative;
                            padding: 20px;
                            flex: 1;
                            text-align: left;
                        }
                        .ticket-l h2{
                            font-size: 1.5rem;
                            text-transform: uppercase;
                        }
                        .ticket-l p{
                            font-size: 1rem;
                            line-height: 1.1rem;
                            font-weight: 300;
                        }
                        .ticket-r {
                            position: relative;
                            max-width: 300px;
                            padding: 40px 20px;
                            flex: 1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .ticket-r img{
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                            border-radius: 6px;
                        }
                        .ticket-note {
                            margin: 20px 0;
                            font-size: 0.9rem;
                            color: #4eaee5;
                        }
                        .ticket-note a {
                            color: #050752;
                            text-decoration: none;
                        }

                        .regards {
                            margin: 40px 20px 0;
                            padding: 20px 0;
                            border-top: 1px solid #05075255;
                            text-align: left;
                            font-size: 0.9rem;
                            color: #050752;
                        }

                        .footer {
                            background: linear-gradient(to top right, #050752, #4eaee5, #78e0f4);
                            padding: 40px 10px;
                            font-size: 0.8rem;
                            color: #fff;
                            border-radius: 4px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <!-- <div class="header-bg"></div> -->
                            <img src="https://iili.io/2NcGD8X.png" alt="tech trade show">
                        </div>

                        <div class="title">
                            <h1>Your VIP ticket for Tech Trade Show 2025 is confirmed!</h1>
                            <p>Your QR Code is ready to download.</p>
                        </div>

                        <div class="welcome">
                            <p>Dear, ${visitor.first_name + " " + visitor.last_name} <br>
                            Congratulations! Your VIP ticket for Tech Trade Show 2025 has been successfully purchased. We're thrilled to have you join us for this premier event celebrating innovation and technology!</p>
                        </div>

                        <div class="ticket">
                            <div class="ticket-bg"></div>
                            <div class="ticket-l">
                                <h2>Ticket Details</h2>
                                <p><b>Full Name:</b> ${visitor.first_name + " " + visitor.last_name}</p>
                                <p><b>Badge Category:</b> VIP Pass</p>
                                <p><b>Email:</b> ${visitor.email}</p>
                            </div>
                            <div class="ticket-r">
                                <img src="${imgData.image.url}" alt="qr code">
                            </div>
                        </div>

                        <p class="ticket-note">Please present this ticket at the registration desk upon arrival. If you have any questions or need assistance, please contact us at <a href="mailto:support@ttsglobal.tech">support@ttsglobal.tech</a>.</p>

                        <div class="regards">
                            <p>We look forward to seeing you at the Tech Trade Show 2025. Together, let's shape the future of technology.
                                <br><br>
                                Best regards,
                                <br>
                                Tech Trade Show Team
                            </p>
                        </div>

                        <div class="footer">
                            &copy; 2024 Tech Trade Show. All rights reserved.
                        </div>
                    </div>
                </body>
                </html>
            `
            };
            // Send email
            mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log('Error Occurs:', err);
                } else {
                    console.log('Email sent successfully');
                }
            });
        }
        

        return NextResponse.json('Callback received successfully', { status: 200 });
    } catch (error: any) {
        console.error('Error in callback:', error.message);
        return NextResponse.json('Invalid callback signature', { status: 400 });
    }
}
