import User from "@/models/UserModel"
import { connect } from "@/utils/connectDB/connectDb"
import { getCookieInfo } from "@/utils/getCookieInfo"
import { NextResponse } from "next/server"

export async function GET(request) {

    connect()
    try {
        const userId = await getCookieInfo(request)
        const user = await User.findOne({ _id: userId }).select("-password")

        const response = NextResponse.json({
            message: 'user found',
            user
        })
        return response

    } catch (error) {
        return NextResponse.json(
            { error: error.message }
            , { status: 500 }
        )

    }
}