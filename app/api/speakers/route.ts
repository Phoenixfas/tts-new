import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Speaker from "@/models/Speaker";

export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const speakers = await Speaker.find({});

        return NextResponse.json({
            success: true,
            data: speakers,
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
        const speaker = await Speaker.create(body);

        return NextResponse.json({
            success: true,
            data: speaker,
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 400 });
    }
}