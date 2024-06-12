import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    number: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    department: String,
    credits: Number,
    description: String,
    description: String,
  },
  { collection: "courses" }
);
export default courseSchema;