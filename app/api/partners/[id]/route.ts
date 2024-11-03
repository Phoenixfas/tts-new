import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Partner from "@/models/Partner";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const id = params.id || "";

    const partner = await Partner.findById(id);
    if (!partner) {
        return NextResponse.json({ message: "Partner not found" }, { status: 404 });
    }
    return NextResponse.json({
        success: true,
        data: partner,
    }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const id = params.id || "";

    const partner = await Partner.findById(id);
    if (!partner) {
        return NextResponse.json({ message: "Partner not found" }, { status: 404 });
    }

    await Partner.findByIdAndDelete(id);
    return NextResponse.json({
        success: true,
        data: {},
    });
}