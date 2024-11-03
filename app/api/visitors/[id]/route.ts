import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
        const id = params.id || "";

        const visitor = await Visitor.findById(id);
        if (!visitor) {
            return NextResponse.json({ message: "Visitor not found" }, { status: 404 });
        }
        return NextResponse.json({
            success: true,
            data: visitor,
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

        const visitor = await Visitor.findById(id);
        if (!visitor) {
            return NextResponse.json({ message: "Visitor not found" }, { status: 404 });
        }

        await Visitor.findByIdAndDelete(id);
        return NextResponse.json({
            success: true,
            data: {},
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}