import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Exhibitor from "@/models/Exhibitor";


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        await dbConnect();
        const { logo, description, sectors, vendor_loc, products, videos } = await request.json();

        const exhibitor = await Exhibitor.findById(id);
        if (!exhibitor) {
            return NextResponse.json({ success: false, message: "Exhibitor not found" }, { status: 404 });
        }
        await Exhibitor.findByIdAndUpdate(id, {
            logo,
            description,
            sectors,
            vendor_loc,
            products,
            videos,
        }, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({
            success: true,
            data: exhibitor,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ success: false, message: error }, { status: 400 });
    }
}