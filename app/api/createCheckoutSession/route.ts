// pages/api/createCheckoutSession.js
import { NextResponse, NextRequest } from "next/server";
import axios from 'axios';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { id, phone } = body;
    const amount = 1;
    const reason = 'Payment for Tech Trade Show 2025 VIP Pass Ticket';
    const successRedirectUrl = `${process.env.PUBLIC_BASE_URL}/exhibit/success/vip/success`;
    const failureRedirectUrl = `${process.env.PUBLIC_BASE_URL}/exhibit/success/vip/failed`;
    const notifyUrl = process.env.PAYMENT_CALLBACK_URL;
    const cancelRedirectUrl = `${process.env.PUBLIC_BASE_URL}/exhibit/success/vip/canceled`;

    const test_url = 'https://testnet.santimpay.com/api/v1/gateway/initiate-payment'
    const live_url = 'https://services.santimpay.com/api/v1/gateway/initiate-payment'

    if (!process.env.SANTIMPAY_PRIVATE_KEY) {
        throw new Error('SANTIMPAY_PRIVATE_KEY is not defined');
    }
    
    // Replace these with your credentials
    const privateKey = Buffer.from(process.env.SANTIMPAY_PRIVATE_KEY, 'base64').toString('utf8');
    const merchantId = process.env.SANTIMPAY_MERCHANT_ID;
    // const gatewayToken = process.env.SANTIMPAY_GATEWAY_TOKEN;

    // Create the signed token
    const payload = { 
        amount, 
        paymentReason: reason,
        merchantId,
        generated: Math.floor(Date.now() / 1000),
    };

    const signedToken = jwt.sign(JSON.stringify(payload), privateKey, { algorithm: 'ES256' });

    try {
        // Send the request to SantimPay
        const res = await fetch(
            live_url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id, // Unique transaction ID
                    phoneNumber: phone,
                    amount,
                    reason,
                    merchantId,
                    signedToken,
                    successRedirectUrl,
                    failureRedirectUrl,
                    notifyUrl,
                    cancelRedirectUrl,
                })
            }
        );
        const response = await res.json();
        
        return NextResponse.json({ success: true, url: response.url }, { status: 200 });
    } catch (error: any) {
        console.error('Error initiating payment:', error.response?.data || error.message);
        return NextResponse.json({ error: 'Failed to initiate payment' }, { status: 500 });
    }
    
}
