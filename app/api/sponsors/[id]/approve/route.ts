import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Sponsor from "@/models/Sponsor";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const body = await request.json();
    const id = params.id || "";

    const sponsor = await Sponsor.findById(id);
    if (!sponsor) {
        return NextResponse.json({ message: "Sponsor not found" }, { status: 404 });
    }

    await sponsor.updateOne({ approved: true });
    
    return NextResponse.json({
        success: true,
        data: sponsor,
    });

}