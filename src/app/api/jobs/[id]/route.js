import Job from "@/models/jobsModel";
import { connect } from "@/utils/connectDB/connectDb";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {

    try {
        await connect()
        // Assuming the ID is passed as a parameter in the URL

        const job = await Job.findById({ _id: params.id });

        // Return success response with the specific job data
        return NextResponse.json({
            message: "Successfully get job by ID",
            success: true,
            data: job
        });

    } catch (error) {
        console.error('Error getting job by ID:', error);
        return NextResponse.json({
            message: error.message
        }, { status: 500 });
    }
}

export async function PATCH(request, { params }) {
    await connect();

    try {
        const data = await request.json();
        const { id } = params;


        // Assuming the ID is passed as a parameter in the URL
        const job = await Job.findOneAndUpdate({ _id: id }, data, { new: true });

        // Check if the job was found and updated
        if (!job) {
            return NextResponse.json({
                message: "job not found",
                success: false,
            }, { status: 404 }); // Using 404 Not Found for resource not found
        }

        // Return success response with the updated job data
        return NextResponse.json({
            message: "Successfully updated job",
            success: true,
            job: job,
        });
    } catch (error) {
        console.error('Error updating job:', error);
        return NextResponse.json({
            message: error.message,
            success: false,
        }, { status: 500 });
    }
}
export async function DELETE(request, { params }) {
    await connect();

    try {
        const { id } = params;

        // Assuming the ID is passed as a parameter in the URL
        const job = await Job.findOneAndDelete({ _id: id });

        // Check if the job was found and updated
        if (!job) {
            return NextResponse.json({
                message: "job not found",
                success: false,
            }, { status: 404 }); // Using 404 Not Found for resource not found
        }

        // Return success response with the updated job data
        return NextResponse.json({
            message: "Successfully Deleted job",
            success: true,
            job: job,
        });
    } catch (error) {
        console.error('Error deleteing job:', error);
        return NextResponse.json({
            message: error.message,
            success: false,
        }, { status: 500 });
    }
}