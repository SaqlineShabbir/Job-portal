

import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import cloudinary from "cloudinary";
import Apply from "@/models/applymodel";
import { connect } from "@/utils/connectDB/connectDb";

//clowdinary
cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME,
    api_key: process.env.CLOUDE_API_KEY,
    api_secret: process.env.CLOUDE_API_SECRET,
});

export async function POST(request) {

    await connect()
    try {
        const body = await request.formData();
        const user = body.get('user')
        const job = body.get('job')
        const email = body.get('email')
        const coverleter = body.get('coverleter')
        const resume = body.get('resume')
        const available = body.get('available')

        // cant  apply if exist
        const existingApplication = await Apply.findOne({ user, job });
        if (existingApplication) {
            return NextResponse.json({
                status: 400,
                message: 'You have already applied for this job.'
            });
        };

        //save file
        const bytes = await resume.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const path = `./files/${resume.name}`
        // Save the file to the specified path
        await fs.writeFile(path, buffer);
        const cloudresult = await cloudinary.uploader.upload(path, {
            folder: 'files',
            public_id: resume.name,
        });

        const response = await Apply.create({
            user,
            job,
            email,
            coverleter,
            available,
            resume: cloudresult?.secure_url

        });
        // Delete the local file after uploading to Cloudinary
        await fs.unlink(path);

        // Return success response
        return NextResponse.json({
            message: "Service created successfully",
            success: true,
            response
        });

    } catch (error) {
        console.error('Error creating service:', error);
        return NextResponse.json({
            error: error.message
        });
    }
}

// export async function GET(request) {
//     await connect()
//     try {

//         const services = await Service.find({})

//         // Return success response
//         return NextResponse.json({
//             message: "successfully get services",
//             success: true,
//             services
//         });

//     } catch (error) {
//         console.error('Error getting services:', error);
//         return NextResponse.json({
//             message: error.message
//         }, { status: 500 });

//     }
// }

