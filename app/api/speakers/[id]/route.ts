import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Speaker from "@/models/Speaker";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
        const id = params.id

        const speaker = await Speaker.findById(id);
        if (!speaker) {
            return NextResponse.json({ message: "Speaker not found" }, { status: 404 });
        }
        return NextResponse.json({
            success: true,
            data: speaker,
        }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
        const id = params.id
        const { first_name, last_name, company_name, email, job_title, profile_pic, type } = await request.json();

        const speaker = await Speaker.findById(id);
        if (!speaker) {
            return NextResponse.json({ message: "Speaker not found" }, { status: 404 });
        }

        speaker.first_name = first_name || speaker.first_name;
        speaker.last_name = last_name || speaker.last_name;
        speaker.company_name = company_name || speaker.company_name;
        speaker.email = email || speaker.email;
        speaker.job_title = job_title || speaker.job_title;
        speaker.profile_pic = profile_pic || speaker.profile_pic;
        speaker.type = type || speaker.type;

        const updatedSpeaker = await speaker.save();

        return NextResponse.json({
            success: true,
            data: updatedSpeaker,
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
        const id = params.id

        const speaker = await Speaker.findById(id);
        if (!speaker) {
            return NextResponse.json({ message: "Speaker not found" }, { status: 404 });
        }

        await Speaker.findByIdAndDelete(id);
        return NextResponse.json({
            success: true,
            data: {},
            message: "Speaker removed"
        });
        
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        }, { status: 404 });
    }
}