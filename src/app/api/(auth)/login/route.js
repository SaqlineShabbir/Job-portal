import User from "@/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { connect } from "@/utils/connectDB/connectDb";
export async function POST(NextRequest) {
    await connect();
    try {
        const body = await NextRequest.json();
        const { email, password } = body;
        console.log('req.bodyyy', body);

        // Check if user exists
        const userExist = await User.findOne({ email });
        console.log(userExist)
        if (!userExist) {
            return NextResponse.json({ error: "Authentication Failed please signup" }, { status: 404 });
        }

        //compare password
        const isValidPassword = await bcrypt.compare(password, userExist.password)
        if (!isValidPassword) {
            return NextResponse.json({ error: "Authentication Failed Password invalid" }, { status: 404 });
        }

        //create token 
        const tokenData = {
            id: userExist._id,
            firstName: userExist.firstname,
            lastname: userExist.lastname,
            email: userExist.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        // Return success response
        const response = NextResponse.json({
            message: "Successfully Loggedin",
            success: true,

        });
        response.cookies.set("accessToken", token, {
            httpOnly: true,

        })
        return response
    } catch (error) {
        console.error(error.message);

        // Return error response
        return NextResponse.json({
            error: error.message
        }, { status: 500 });
    }
}