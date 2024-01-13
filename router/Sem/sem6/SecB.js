const { SignupControllers } = require("../../../Controllers/Sem/Sem6/SecB");

const route = require("express").Router();
route.post("/signup", SignupControllers);
module.exports = route;
