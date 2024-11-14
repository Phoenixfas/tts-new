import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Exhibitor from "@/models/Exhibitor";

export async function PUT( req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id || "";
    try {
        await dbConnect();

        const exhibitor = await Exhibitor.findById(id);
        if (!exhibitor) {
            return NextResponse.json({ message: "Exhibitor not found" }, { status: 404 });
        }
        await Exhibitor.findByIdAndUpdate(id, { approved: true }, {
            new: true,
            runValidators: true,
        });
        return NextResponse.json({
            success: true,
            data: exhibitor,
        }, { status: 200 });
    } catch (e: any) {
        return NextResponse.json(
            { message: `Internal Server Err ${e.message}` },
            { status: 500 }
        );
    }
}