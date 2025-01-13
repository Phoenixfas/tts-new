import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";

export async function GET(request: NextRequest) {
    const limit = 200;
    try {
        await dbConnect();
        const visitors = await Visitor.find({passType: "paid", paymentStatus: "success"});

        if (visitors.length >= limit) {
            return NextResponse.json({
                success: false,
                message: "Booking is full",
            }, { status: 400 });
        }
        return NextResponse.json({
            success: true,
            message: "Booking is available",
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}