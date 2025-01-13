// pages/api/paymentCallback.js
import { NextResponse, NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";


export async function POST(request: NextRequest) {
    const signedToken = request.headers.get('signed-token');
    const publicKey = process.env.SANTIMPAY_PUBLIC_KEY;
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
        const verifiedPayload = jwt.verify(signedToken, publicKey, { algorithms: ['ES256'] });

        // Process the transaction based on `req.body`
        console.log('Payment Callback Data:', body);

        // Update the visitor's payment status and details

        return NextResponse.json('Callback received successfully', { status: 200 });
    } catch (error: any) {
        console.error('Invalid token:', error.message);
        return NextResponse.json('Invalid callback signature', { status: 400 });
    }
}
