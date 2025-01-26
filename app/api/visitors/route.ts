import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";
import nodemailer from 'nodemailer';
import QRCode from 'qrcode';
import axios from "axios";

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

export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const visitors = await Visitor.find({});
        return NextResponse.json({
            success: true,
            data: visitors,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}


export async function POST(request: NextRequest) {
    try {    
        await dbConnect();
        const body = await request.json();
        const { email, passType } = body;
        
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

        const resData = await fetch(`${process.env.PUBLIC_BASE_URL}/api/createCheckoutSession`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                id: newVisitor.id, 
                phone: newVisitor.phone 
            }),
        });

        const res = await resData.json();

        let mailDetails = {
            from: `"Tech Trade Show" <${process.env.EMAIL_TEST_USERNAME}>`, // sender address
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

                        .event-details {
                            margin: 20px 0;
                            text-align: left;
                            background: linear-gradient(to top right, #050752, #4eaee5, #78e0f4);
                            padding: 20px;
                            border-radius: 8px;
                            color: #fff;
                        }

                        .event-details h2 {
                            font-size: 1.5rem;
                            margin-bottom: 10px;
                            text-transform: uppercase;
                        }

                        .event-details ul {
                            list-style: none;
                            padding: 0;
                        }

                        .event-details ul li {
                            padding: 8px 0;
                            font-size: 0.9rem;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                        }

                        .expect {
                            margin: 40px 20px;
                            padding: 20px 0;
                            border-top: 1px solid #05075255;
                            border-bottom: 1px solid #05075255;
                            text-align: center;
                            color: #050752;
                        }
                        .expect h2 {
                            font-size: 1.5rem;
                            font-weight: bold;
                            margin-bottom: 10px;
                            text-transform: uppercase;
                        }
                        .expect p {
                            font-size: 0.9rem;
                        }

                        .features {
                            margin: 20px 0;
                            text-align: center;
                            color: #050752;
                        }
                        .features h2 {
                            font-size: 1.5rem;
                            font-weight: bold;
                            margin-bottom: 10px;
                            text-transform: uppercase;
                        }
                        .features-list {
                            margin: 0 auto;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            align-items: center;
                            width: fit-content;
                        }
                        .feature{
                            position: relative;
                            min-width: 150px;
                            max-width: 150px;
                            min-height: 150px;
                            max-height: 150px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            border-radius: 4px;
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .feature-bg{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: #00000055;
                        }
                        .feature img {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        .feature h3 {
                            position: relative;
                            z-index: 1;
                            padding: 0 10px;
                            font-size: 1.2rem;
                            color: #fff;
                            text-shadow: 0 0 10px #78e0f4;
                            text-transform: uppercase;
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
                            <h1>Thankyou for registering to visit Tech Trade Show 2025!</h1>
                            <p>Your QR Code is ready to download.</p>
                        </div>

                        <div class="welcome">
                            <p>Hi, ${newVisitor.first_name + " " + newVisitor.last_name} <br>
                            We are thrilled to confirm your registration for the Tech Trade Show 2025, the largest technology exhibition in East Africa. Your ticket is secured, and we can't wait to welcome you to this extraordinary event.</p>
                        </div>

                        <div class="ticket">
                            <div class="ticket-bg"></div>
                            <div class="ticket-l">
                                <h2>Ticket Details</h2>
                                <p><b>Full Name:</b> ${newVisitor.first_name + " " + newVisitor.last_name}</p>
                                <p><b>Badge Category:</b> ${passType === "free" ? "Free Pass" : "VIP Pass (Paid)"}</p>
                                <p><b>Email:</b> ${newVisitor.email}</p>
                            </div>
                            <div class="ticket-r">
                                <img src="${imgData.image.url}" alt="qr code">
                            </div>
                        </div>

                        <p> Note: If you've applied for a VIP Pass and completed payment, you will receive another email confirming your vip ticket purchase. otherwise please proceed to make the payment to secure your ticket.</p>
                        <p> Want to upgrade to a VIP Pass? <a href="${res.url}">Click here</a></p>
                        <p class="ticket-note">Please present this ticket at the registration desk upon arrival. If you have any questions or need assistance, please contact us at <a href="mailto:support@ttsglobal.tech">support@ttsglobal.tech</a>.</p>

                        <div class="event-details">
                            <h2>Event Details</h2>
                            <ul>
                                <li>Event: Tech Trade Show</li>
                                <li>Date: May 15-17, 2025</li>
                                <li>Location: Addis Ababa, Millinium Hall</li>
                            </ul>
                        </div>

                        <div class="expect">
                            <h2>What to expect</h2>
                            <p>Get ready to experience the latest technology trends, innovations, and products from leading tech companies. The event will feature keynote speakers, panel discussions, product launches, and networking opportunities.</p>
                        </div>

                        <div class="features">
                            <h2>Event Features</h2>
                            <div class="features-list">
                                <div class="feature">
                                    <img src="https://iili.io/2Ncs1zG.png" alt="keynote">
                                    <div class="feature-bg"></div>
                                    <h3>Hackathon</h3>
                                </div>
                                <div class="feature">
                                    <img src="https://iili.io/2NcipRe.png" alt="keynote">
                                    <div class="feature-bg"></div>
                                    <h3>Investors Lounge</h3>
                                </div>
                                <div class="feature">
                                    <img src="https://iili.io/2Nci8lI.png" alt="keynote">
                                    <div class="feature-bg"></div>
                                    <h3>Cyber Drill</h3>
                                </div>
                            </div>
                            <div class="features-list">
                                <div class="feature">
                                    <img src="https://iili.io/2Nci5Au.png" alt="keynote">
                                    <div class="feature-bg"></div>
                                    <h3>TTS Award</h3>
                                </div>
                                <div class="feature">
                                    <img src="https://iili.io/2NcPLa1.png" alt="keynote">
                                    <div class="feature-bg"></div>
                                    <h3>Conference</h3>
                                </div>
                                <div class="feature">
                                    <img src="https://iili.io/2Nc61zx.png" alt="keynote">
                                    <div class="feature-bg"></div>
                                    <h3>Smart City Corner</h3>
                                </div>
                            </div>
                        </div>

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

        if (passType === 'paid') {
            return NextResponse.json({
                success: true,
                url: res.url
            }, { status: 200 });
        }
        
        return NextResponse.json({
            success: true,
            data: newVisitor
        }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Error Occured: " + error
        }, { status: 400 });
    }
}
