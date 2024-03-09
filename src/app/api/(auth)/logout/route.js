import { connect } from "@/utils/connectDB/connectDb";
import { NextResponse } from "next/server";

export async function POST(request) {

    try {
        await connect()
        const response = NextResponse.json(
            {
                mesage: "Logout successful",
                success: true
            })

        response.cookies.set('accessToken', '', {
            httpOnly: true,
            expires: new Date(0) // Set the expiration date to a time in the past
        });
        return response

    } catch (error) {

    }
}