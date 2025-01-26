// pages/api/paymentCallback.js
import { NextResponse, NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";
import Transaction from "@/models/Transaction";
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
    const signedToken = request.headers.get('signed-token');
    
    if (!process.env.SANTIMPAY_PUBLIC_KEY) {
        throw new Error('SANTIMPAY_PUBLIC_KEY is not defined');
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
        // const verifiedPayload = jwt.verify(signedToken, publicKey, { algorithms: ['ES256'] });

        // Process the transaction based on `req.body`

        let mailDetails = {
            from: `"Tech Trade Show" <${process.env.EMAIL_TEST_USERNAME}>`, // sender address
            to: "woodhulabe123@gmail.com", // list of receivers
            subject: "Tech Trade Show - Registration Confirmation", // Subject line
            text: "", // plain text body
            html: `
                <!DOCTYPE html>
                <html>
                <body>
                    <h1>Santimpay Payment Confirmation</h1>
                    <div>${JSON.stringify(body)}</div>
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
        const newTransaction = await Transaction.create(body);
        console.log("callback body: " + JSON.stringify(body));

        // Update the visitor's payment status and details

        return NextResponse.json('Callback received successfully', { status: 200 });
    } catch (error: any) {
        console.error('Invalid token:', error.message);
        return NextResponse.json('Invalid callback signature', { status: 400 });
    }
}
