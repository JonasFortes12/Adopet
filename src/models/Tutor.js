import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema(
    {
        name: {type: String, require: true},
        city: {type: String, require: true},
        phone: {type: String, require: true},
        about: {type: String,require: true}
    }

);

const tutors = new mongoose.model('Tutors', tutorSchema)

export default tutors;