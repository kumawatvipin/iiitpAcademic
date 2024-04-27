const {
  TeacherSignupControllers,
  TeacherloginController,
  refreshController,
} = require("../../Controllers/Teacher/Registered");

const route = require("express").Router();

route.post("/signup", TeacherSignupControllers);
route.post("/login", TeacherloginController);
route.get("/refresh", refreshController);
module.exports = route;
