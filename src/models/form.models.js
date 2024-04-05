import mongoose from "mongoose";

const formSchema = mongoose.Schema({
    sitename: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Form = mongoose.model("Form", formSchema);