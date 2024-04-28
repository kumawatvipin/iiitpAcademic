const {
  updateDSAMarks,
  updateCNVMarks,
  updateHumanitiesMarks,
  updateDLDMarks,
  updateOOPLMarks,
  updateEM2Marks,

  studentShowCNVMarks,
  studentShowDSAMarks,
  studentShowEM2Marks,
  studentShowOOPLMarks,
  studentShowHumanitiesMarks,
  studentShowEntreStudiesMarks,
  studentShowDLDMarks,
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
// route.post("/dld", updateEM2Marks);
// route.post("/show/dld", studentShowEM2Marks);
// route.post("/oopl", updateEM2Marks);
// route.post("/show/oopl", studentShowEM2Marks);

// route.post("/em2", updateEM2Marks);
// route.post("/show/em2", studentShowEM2Marks);

module.exports = route;
