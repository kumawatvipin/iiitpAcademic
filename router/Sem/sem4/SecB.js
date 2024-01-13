const { SignupControllers } = require("../../../Controllers/Sem/Sem4/SecB");

const route = require("express").Router();
route.post("/signup", SignupControllers);
module.exports = route;
