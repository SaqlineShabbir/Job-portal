import User from "@/models/UserModel";
import Apply from "@/models/applymodel";
import Job from "@/models/jobsModel";
import { connect } from "@/utils/connectDB/connectDb";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    try {
        connect()
        const { id } = params;
        const userapplications = await Apply.find({ user: id }).populate({ path: 'job', model: Job }).populate({ path: 'user', model: User })

        if (!userapplications) {
            return NextResponse.json({
                status: 400,
                message: "No application Found"
            })
        }

        const response = NextResponse.json({
            status: 200,
            userapplications
        })

        return response

    } catch (error) {

        return NextResponse.json({
            status: "400",
            error: error.message
        })

    }
}