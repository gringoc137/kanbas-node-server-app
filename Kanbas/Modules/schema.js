import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  name: { type: String, default: "Sample Lesson" },
  description: { type: String, default: "Sample Lesson Description" },
  module: { type: String },
});

const moduleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // description: { type: String, required: true },
    description: { type: String },
    course: { type: String, required: true },
    lessons: { type: [lessonSchema], required: false, default: [] },
  },
  { collection: "modules" },
);
export default moduleSchema;