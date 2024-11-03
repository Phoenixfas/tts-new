import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import New from "@/models/New";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const id = params.id || "";

    const blog = await New.findById(id);
    if (!blog) {
        return NextResponse.json({ message: "Blogs not found" }, { status: 404 });
    }
    return NextResponse.json({
        success: true,
        data: blog,
    }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const id = params.id || "";

    const blog = await New.findById(id);
    if (!blog) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    await New.findByIdAndDelete(id);
    return NextResponse.json({
        success: true,
        data: {},
    });
}