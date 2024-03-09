import User from "@/models/UserModel";
import { connect } from "@/utils/connectDB/connectDb";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connect();
    try {
        const body = await request.json();
        const { token } = body;
        console.log('req.bodyyy', body);

        if (!token) {
            return NextResponse.json({
                status: 404,
                message: 'Token not found',

            });
        };
        const decodedtoken = jwt.verify(token, process.env.TOKEN_SECRET);
        const userExist = await User.exists({ email: decodedtoken.email });
        if (userExist) {
            return NextResponse.json({
                status: 500,
                message: 'This user already exist please login',

            });
        };
        if (!decodedtoken) {
            return NextResponse.json({
                status: 500,
                message: 'user verification failed',

            });
        };

        await User.create(decodedtoken);

        // Return success response
        const response = NextResponse.json({
            success: true,
            message: 'user verification successful',

        });
        return response

    } catch (error) {
        console.error(error.message);

        // Return error response
        return NextResponse.json({
            error: error.message
        }, { status: 500 });
    }
}