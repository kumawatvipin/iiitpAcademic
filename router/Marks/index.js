const {
  updateCNVMarks,
  updateDSAMarks,
  studentShowCNVMarks,
  studentShowDSAMarks,
 updateEM2Marks,
 studentShowEM2Marks
} = require("../../Data/sem2");

const { studentShowOS } = require("../../Data/sem4");

const {} = require("../../Data/sem6");

const route = require("express").Router();

route.post("/cnv", updateCNVMarks);
route.post("/show/cnv", studentShowCNVMarks);
route.post("/dsa", updateDSAMarks);
route.post("/show/dsa", studentShowDSAMarks);
route.post("/em2", updateEM2Marks);
route.post("/show/em2", studentShowEM2Marks);


module.exports = route;
