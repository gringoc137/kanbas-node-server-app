import model from "./model.js";
export const fetchAllCourses = () => model.find();
export const createCourse = (course) => {}
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });