import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Partner from "@/models/Partner";

export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const partners = await Partner.find({});

        return NextResponse.json({
            success: true,
            data: partners,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        const partner = await Partner.create(body);

        return NextResponse.json({
            success: true,
            data: partner
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 400 });
    }
}