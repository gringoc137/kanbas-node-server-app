import db from "../Database/index.js";
import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    // app.delete("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params;
    //     db.modules = db.modules.filter((m) => m._id !== mid);
    //     res.sendStatus(200);
    //   });

      const deleteModule = async (req, res) => {
        const { mid } = req.params;
        console.log("Deleting module with ID:", mid);
        const status = await dao.deleteModule(mid);
        res.json(status);
    }
    app.delete("/api/modules/:mid", deleteModule);
    
    // app.post("/api/courses/:cid/modules", (req, res) => {
    //     const { cid } = req.params;
    //     const newModule = {
    //       ...req.body,
    //       course: cid,
    //       _id: new Date().getTime().toString(),
    //     };
    //     db.modules.push(newModule);
    //     res.send(newModule);
    //   });

      const createModule = async (req, res) => {
        const { cid } = req.params;
        const module = await dao.createModule(req.body, cid);
        res.json(module);
    };
    app.post("/api/courses/:cid/modules", createModule);

    
  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules.filter((m) => m.course === cid);
  //   res.json(modules);
  // });
  const findAllModulesForCourse = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModulesForCourse(cid);
    res.json(modules);
}
app.get("/api/courses/:cid/modules", findAllModulesForCourse);

  // app.put("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex(
  //     (m) => m._id === mid);
  //   db.modules[moduleIndex] = {
  //     ...db.modules[moduleIndex],
  //     ...req.body
  //   };
  //   res.sendStatus(204);
  // });

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    console.log("Updating module with ID:", mid);
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
}
app.put("/api/modules/:mid", updateModule);

}
