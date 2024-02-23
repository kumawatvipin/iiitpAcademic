const {
  CNV,
  DLD,
  DSA,
  EM2,
  Humanities,
  EntreStudies,
  OOPL,
  updateCNV,
  updateDLD,
  updateDSA,
  updateEM2,
  updateEntreStudies,
  updateHumanities,
  updateOOPL,
} = require("../../Attendance/sem2");

const route = require("express").Router();
route.post("/cnv", CNV);
route.post("/dld", DLD);
route.post("/dsa", DSA);
route.post("/humanities", Humanities);
route.post("/entrestudies", EntreStudies);
route.post("/oopl", OOPL);
route.post("/em2", EM2);
route.post("/update/cnv", updateCNV);
route.post("/update/dld", updateDLD);
route.post("/update/dsa", updateDSA);
route.post("/update/humanities", updateHumanities);
route.post("/update/entrestudies", updateEntreStudies);
route.post("/update/oopl", updateOOPL);
route.post("/update/em2", updateEM2);

module.exports = route;
