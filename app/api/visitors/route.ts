import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";
import nodemailer from 'nodemailer';
import QRCode from 'qrcode';

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

export async function POST(request: NextRequest) {
    try {    
        await dbConnect();
        const body = await request.json();
        const { email } = body;
        
        const visitor = await Visitor.findOne({ email });

        if (visitor) {
            return NextResponse.json({ 
                success: false,
                message: "Visitor already exists" 
            }, { status: 400 });
        }

        const newVisitor = await Visitor.create(body);
        
        // Generate QR code as a buffer
        const qrCodeBuffer = await QRCode.toBuffer(newVisitor.id, { 
            version: 10, 
            errorCorrectionLevel: 'H', 
            width: 600, 
            margin: 2 
        });

        let mailDetails = {
            from: '"Afriopia" <afriopiacom@gmail.com>', // sender address
            to: newVisitor.email, // list of receivers
            subject: "Tech Trade Show - Registration Confirmation", // Subject line
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
                <title>Tech Trade Show - Registration Confirmation</title>
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
                    <div class="container">
                        <div style="text-align: center;">
                            <a href="https://techtradeshow.tech"><img class="logo" src="https://res.cloudinary.com/drp73bqti/image/upload/v1730051512/afriopia/tts_logo_sya4hv.png" alt="TTS Logo"></a>
                            <h1>Tech Trade Show - Registration Confirmation</h1>
                        </div>
                        <div class="details">
                            <p>Dear ${newVisitor.first_name},</p>
                            <p>We are pleased to inform you that your registration to visit in TTS has been confirmed. </p>
                
                            <p>Details of the event are as follows:</p>
                            <ul>
                            <li>Event: Tech Trade Show</li>
                            <li>Date: TBS</li>
                            <li>Location: Addis Ababa, Millinium Hall</li>
                            </ul>

                            <p>Attached to this email, you will find a QR code which you can use for check-in verification at the event. Please make sure to bring a printed copy or have the code accessible on your mobile device.</p>

                            <p>We look forward to seeing you at the Tech Trade Show and are excited to provide you with an opportunity to learn about the latest advancements in tech.</p>

                            <p>If you have any questions or concerns, please do not hesitate to contact us at hello@techtradeshow.tech</p>
                            
                            <p>Best regards,</p>
                            <p>TTS Team</p>
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
        
        return NextResponse.json({
            success: true,
            data: newVisitor
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Error Occured: " + error
        }, { status: 400 });
    }
}
