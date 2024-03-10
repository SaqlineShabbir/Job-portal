import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types
const applySchema = mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    job: {
        type: ObjectId,
        ref: "Job"
    },
    email: {
        type: String,
        required: true
    },
    coverleter: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true,
    },
    available: {
        type: String,
        required: true
    }
})

const Apply = mongoose.models.Apply || mongoose.model("Apply", applySchema)
export default Apply;