const { SignupControllers } = require("../../../Controllers/Sem/Sem4/SecA");

const route = require("express").Router();
route.post("/signup", SignupControllers);
module.exports = route;
