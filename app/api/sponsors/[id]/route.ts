import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Sponsor from "@/models/Sponsor";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const id = params.id || "";

    const sponsor = await Sponsor.findById(id);
    if (!sponsor) {
        return NextResponse.json({ message: "Sponsor not found" }, { status: 404 });
    }
    return NextResponse.json({
        success: true,
        data: sponsor,
    }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const id = params.id || "";

    const sponsor = await Sponsor.findById(id);
    if (!sponsor) {
        return NextResponse.json({ message: "Sponsor not found" }, { status: 404 });
    }

    await Sponsor.findByIdAndDelete(id);
    return NextResponse.json({
        success: true,
        data: {},
    });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const body = await request.json();
    const id = params.id || "";

    const sponsor = await Sponsor.findById(id);
    if (!sponsor) {
        return NextResponse.json({ message: "Sponsor not found" }, { status: 404 });
    }

    
    await Sponsor.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });
    return NextResponse.json({
        success: true,
        data: sponsor,
    });
}