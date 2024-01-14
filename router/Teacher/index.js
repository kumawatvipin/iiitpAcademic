const {
  TeacherSignupControllers,
  TeacherloginController,
} = require("../../Controllers/Teacher/Registered");

const route = require("express").Router();

route.post("/signup", TeacherSignupControllers);
route.post("/login", TeacherloginController);
module.exports = route;
