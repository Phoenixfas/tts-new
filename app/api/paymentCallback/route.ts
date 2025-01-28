import { NextResponse, NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";
import Transaction from "@/models/Transaction";


export async function POST(request: NextRequest) {
    const signedToken = request.headers.get('signed-token');
    
    // //////////////////// Testing Code /////////////////////////
    
    console.log(signedToken);

    // /////////////////////////////////////////////
    
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

        // Check if the payment status is COMPLETED

        if (verifiedPayload?.Status === 'COMPLETED') {
            visitor.paymentStatus = 'completed';
            visitor.paymentDetails = verifiedPayload;

            // Update the visitor's payment status and details
            await visitor.save();
            const newTransaction = await Transaction.create(body);

            // Send an email to the visitor
            const sendSuccessEmail = await fetch(`https://tts.afriopia.com/api/paySuccess`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({visitor})
            })

            // console.log if sendSuccessEmail returns status ok
            if (sendSuccessEmail.status === 200) {
                console.log('route recieved successfully');
            }
        }
        

        return NextResponse.json('Callback received successfully', { status: 200 });
    } catch (error: any) {
        console.error('Error in callback:', error.message);
        return NextResponse.json('Invalid callback signature', { status: 400 });
    }
}
