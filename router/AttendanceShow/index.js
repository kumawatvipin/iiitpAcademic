const {
  CNV,
  DLD,
  DSA,
  EM2,
  Humanities,
  EntreStudies,
  OOPL,
} = require("../../Attendance/sem2");

const route = require("express").Router();
route.post("/cnv", CNV);
route.post("/dld", DLD);
route.post("/dsa", DSA);
route.post("/humanities", Humanities);
route.post("/entrestudies", EntreStudies);
route.post("/oopl", OOPL);
route.post("/em2", EM2);

module.exports = route;
