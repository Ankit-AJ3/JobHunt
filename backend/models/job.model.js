import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    requirement:{
        type: String,
    },
    salary:{
        type: Number,
        require: true
    },
    location:{
        type: String,
        required: true
    },
    jobType:{
        type: String,
        require: true
    },
    position:{
        type: Number,
        require: true
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        require: true
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
    }]
}, {timestamps:true});

export const Job = mongoose.model("Job", jobSchema);