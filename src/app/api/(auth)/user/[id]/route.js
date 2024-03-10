
import User from "@/models/UserModel";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import cloudinary from 'cloudinary'
import { connect } from "@/utils/connectDB/connectDb";
//clowdinary
cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME,
    api_key: process.env.CLOUDE_API_KEY,
    api_secret: process.env.CLOUDE_API_SECRET,
});

export async function PATCH(request, { params }) {
    try {
        connect()
        const { id } = params;

        const body = await request.formData();
        const file = body.get('photo')



        //save file
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const path = `./files/${file.name}`
        // Save the file to the specified path
        await fs.writeFile(path, buffer);
        const cloudresult = await cloudinary.uploader.upload(path, {
            folder: 'files',
            public_id: file.name,
        });
        const userInfo = {
            ...body,
            photo: cloudresult.secure_url
        };

        const update = await User.findByIdAndUpdate({ _id: id }, userInfo);
        // Delete the local file after uploading to Cloudinary
        await fs.unlink(path);
        const response = NextResponse.json({
            status: 200,
            update
        })
        return response

    } catch (error) {

        return NextResponse.json({
            status: "400",
            error: error.message
        })

    }
}

export async function GET(request, { params }) {
    try {
        connect()
        const { id } = params;
        const user = await User.findOne({ _id: id })

        if (!user) {
            return NextResponse.json({
                status: 400,
                message: "User not Found"
            })
        }

        const response = NextResponse.json({
            status: 200,
            user
        })

        return response

    } catch (error) {

        return NextResponse.json({
            status: "400",
            error: error.message
        })

    }
}