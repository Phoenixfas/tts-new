import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Visitor from "@/models/Visitor";
import CheckIn from "@/models/CheckIn";
import { Types } from "mongoose"; // Import ObjectId from mongoose

// Standardized error handler
const handleError = (message: string, statusCode: number) => {
    return NextResponse.json({ success: false, message }, { status: statusCode });
};

export async function POST(request: NextRequest) {
    try {
        // Establish DB connection
        await dbConnect();
        
        // Parse request body
        const body = await request.json();
        const { userId } = body;

        // Validate the presence of userId and ensure it is a valid ObjectId
        if (!userId || !Types.ObjectId.isValid(userId)) {
            return handleError("Invalid or Incorrect ID", 404);
        }

        // Check if the visitor exists
        const visitor = await Visitor.findById(userId);

        if (!visitor) {
            return handleError("Visitor not found", 404);
        }

        // Check if the user has already checked in
        const checkedIn = await CheckIn.findOne({ userId });

        if (checkedIn) {
            return handleError("Visitor has already checked in", 400);
        }

        // Create new check-in record
        const newCheckIn = await CheckIn.create({ userId });

        // Respond with the created check-in and visitor details
        return NextResponse.json({
            success: true,
            message: "Check-in successful",
            data: { visitor, checkIn: newCheckIn },
        }, { status: 201 });

    } catch (error) {
        console.error("Error during check-in:", error);

        // Return a standardized error message
        return handleError("Internal server error", 500);
    }
}
