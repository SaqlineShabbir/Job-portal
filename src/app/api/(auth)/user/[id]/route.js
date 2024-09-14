import User from "@/models/UserModel";
import { connect } from "@/utils/connectDB/connectDb";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  connect();
  try {
    const user = await User.findOne({ _id: params.id }).select("-password");

    const response = NextResponse.json({
      message: "user found",
      user,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
