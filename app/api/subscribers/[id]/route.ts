import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Subscriber from "@/models/Subscriber";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
        const id = params.id || "";

        const subscriber = await Subscriber.findById(id);
        if (!subscriber) {
            return NextResponse.json({ message: "Subscriber not found" }, { status: 404 });
        }
        return NextResponse.json({
            success: true,
            data: subscriber,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
        const id = params.id || "";

        const subscriber = await Subscriber.findById(id);
        if (!subscriber) {
            return NextResponse.json({ message: "Subscriber not found" }, { status: 404 });
        }

        await Subscriber.findByIdAndDelete(id);
        return NextResponse.json({
            success: true,
            message: 'Subscriber removed'
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}