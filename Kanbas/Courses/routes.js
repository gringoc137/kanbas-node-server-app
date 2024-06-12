import Database from "../Database/index.js";
import * as dao from "./dao.js";
let currentCourse = null;
export default function CourseRoutes(app) {
    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = req.body;
        Database.courses = Database.courses.map((c) =>
          c._id === id ? { ...c, ...course } : c
        );
        res.sendStatus(204);
      });
    
     app.delete("/api/courses/:id", (req, res) => {
         const { id } = req.params;
         Database.courses = Database.courses.filter((c) => c._id !== id);
         res.sendStatus(204);
       });
    // const deleteCourse = async (req, res) => {
    //     const status = await dao.deleteCourse(req.params.courseId);
    //     res.json(status);
    // };
    // app.delete("/api/courses/:courseId", deleteCourse);
    
    app.post("/api/courses", (req, res) => {
        const course = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        Database.courses.push(course);
        res.send(course);
    });

      app.get("/api/courses", (req, res) => {
          const courses = Database.courses;
          res.send(courses);
      });
    //  const fetchAllCourses = async (req, res) => {
    //      const courses = await dao.fetchAllCourses();
    //      res.json(courses);
    //    };
    //    app.get("/api/courses", fetchAllCourses);
}
