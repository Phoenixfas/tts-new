import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Subscriber from "@/models/Subscriber";

export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const subscribers = await Subscriber.find({});

        return NextResponse.json({
            success: true,
            data: subscribers,
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
        const { email } = await request.json();
        const subscriberExists = await Subscriber.findOne({ email });

        if (subscriberExists) {
            return NextResponse.json({
                success: false,
                message: "Subscriber already exists",
            }, { status: 400 });
        }

        const subscriber = await Subscriber.create({ email });
        return NextResponse.json({
            success: true,
            data: {
                _id: subscriber._id,
                email: subscriber.email,
            }
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 400 });
    }
}
        