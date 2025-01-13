// pages/api/createCheckoutSession.js
import { NextResponse, NextRequest } from "next/server";
import axios from 'axios';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { id } = body;
    const amount = 500;
    const reason = 'Payment for Tech Trade Show 2025 VIP Pass Ticket';
    const successRedirectUrl = '/exhibit/success/vip/success';
    const failureRedirectUrl = '/exhibit/success/vip/failed';
    const notifyUrl = '/api/paymentCallback';
    const cancelRedirectUrl = '/exhibit/success/vip/canceled';

    const test_url = 'https://testnet.santimpay.com/api/v1/gateway/initiate-payment'
    const live_url = 'https://services.santimpay.com/api/v1/gateway/initiate-payment'

    // Replace these with your credentials
    const privateKey = process.env.SANTIMPAY_PRIVATE_KEY;
    const merchantId = process.env.SANTIMPAY_MERCHANT_ID;
    const gatewayToken = process.env.SANTIMPAY_GATEWAY_TOKEN;

    // Create the signed token
    const payload = { 
        amount, 
        reason, 
        merchantId,
        generated: Math.floor(Date.now() / 1000),
    };

    if (!privateKey) {
        throw new Error('SANTIMPAY_PRIVATE_KEY is not defined');
    }
    const signedToken = jwt.sign(JSON.stringify(payload), privateKey, { algorithm: 'ES256' });

    try {
        // Send the request to SantimPay
        const response = await axios.post(
            test_url,
            {
                id, // Unique transaction ID
                amount,
                reason,
                merchantId,
                signedToken,
                successRedirectUrl,
                failureRedirectUrl,
                notifyUrl,
                cancelRedirectUrl,
            },
            {
                headers: {
                    Authorization: `Bearer ${gatewayToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return NextResponse.json({ url: response.data.url }, { status: 200 });
    } catch (error: any) {
        console.error('Error initiating payment:', error.response?.data || error.message);
        return NextResponse.json({ error: 'Failed to initiate payment' }, { status: 500 });
    }
    
}
