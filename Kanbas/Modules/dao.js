import moduleModel from "./model.js";

export const createModule = (module, courseId) => {
    delete module._id;
    module.course = courseId;
    return moduleModel.create(module);
  };
  
  export const findAllModulesForCourse = (courseId) =>
    moduleModel.find({ course: courseId });
  export const findModuleById = (moduleId) => moduleModel.findById(moduleId);
  export const updateModule = (moduleId, module) =>
    moduleModel.updateOne({ _id: moduleId }, { $set: module });
  export const deleteModule = (moduleId) =>
    moduleModel.deleteOne({ _id: moduleId });

//    export const findAllModulesForCourse = (courseId) => moduleModel.find();