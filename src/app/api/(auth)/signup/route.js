


import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server"
import jwt from 'jsonwebtoken';
import User from '@/models/UserModel';
import mailer from '@/utils/Email';
import { connect } from '@/utils/connectDB/connectDb';

export async function POST(request) {
    await connect();
    try {
        const body = await request.json();
        const { firstname, lastname, email, password } = body;
        console.log('req.bodyyy', body);

        // Check if user exists
        const userExist = await User.findOne({ email });

        if (userExist) {
            return NextResponse.json({ error: "User already exists" }, { status: 404 });
        }

        // Make password hashed
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        //create token 
        const tokenData = {
            firstname,
            lastname,
            email,
            password: hashedPassword
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })


        //prepare mail
        const maildata = {
            email: email,
            subject: 'Account Activation Mail',
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f8f8f8;">
                <h2 style="color: #333; text-align: center;">Account Activation</h2>
                <p>Hello ${firstname},</p>
                <p>Welcome to our platform! To activate your account, please click the link below:</p>
                <p style="text-align: center; margin-top: 20px;">
                    <a href="https://job-portal-kohl-six.vercel.app/verify/${token}" style="display: inline-block; padding: 10px 20px; background-color: #4caf50; color: #fff; text-decoration: none; border-radius: 5px;" target="_blank">Activate your account</a>
                </p>
                
                <p style="font-size: 12px; color: #777;">Note: This activation link will expire in 5 minutes.</p> <br/>
                <span>Thanks</span>
                <p> from team 👨‍💻 </p>
            </div>
        `,


        };
        await mailer(maildata);
        // Return success response
        const response = NextResponse.json({
            success: true,
            message: 'An email with a verification link has been sent to your email id. Please click on that link to confirm your registration. Check your spam folder or promotions tab too.',
            token
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