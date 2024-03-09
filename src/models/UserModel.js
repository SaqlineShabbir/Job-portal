import jwt from "jsonwebtoken";
import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "user first name is required"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "user last name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "user email is required"],
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "user password is required"],
        minlength: [6, "password should be at least 6 character"],
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    country: {
        type: String,

    },
    photo: {
        type: String,
    },
    role: {
        type: String,
        enum: ["Admin", "Employer", "Student"],
    }
}, { timestamps: true });


const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;