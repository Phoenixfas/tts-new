import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Exhibitor from "@/models/Exhibitor";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const id = params.id || "";

    const exhibitor = await Exhibitor.findById(id);
    if (!exhibitor) {
        return NextResponse.json({ message: "Exhibitor not found" }, { status: 404 });
    }
    return NextResponse.json({
        success: true,
        data: exhibitor,
    }, { status: 200 });
}


export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const id = params.id || "";

    const exhibitor = await Exhibitor.findById(id);
    if (!exhibitor) {
        return NextResponse.json({ message: "Exhibitor not found" }, { status: 404 });
    }

    await Exhibitor.findByIdAndDelete(id);
    return NextResponse.json({
        success: true,
        data: {},
    });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const body = await request.json();
    const id = params.id || "";

    const exhibitor = await Exhibitor.findById(id);
    if (!exhibitor) {
        return NextResponse.json({ message: "Exhibitor not found" }, { status: 404 });
    }

    
    await Exhibitor.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });
    return NextResponse.json({
        success: true,
        data: exhibitor,
    });
}