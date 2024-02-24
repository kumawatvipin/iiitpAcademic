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

const {
  AC,
  AEC,
  AI,
  CD,
  CN,
  DS,
  SNS,
  OS,
  updateAC,
  updateAEC,
  updateAI,
  updateCD,
  updateCN,
  updateDS,
  updateJava,
  updateOS,
  updateSNS,
  Java,
} = require("../../Attendance/sem4");

const {
  CC,
  CCBT,
  CG,
  IOT,
  ISS,
  ITC,
  WC,
  ES,
  AGT,
  CV,
  updateAGT,
  updateCC,
  updateCCBT,
  updateCG,
  updateCV,
  updateES,
  updateIOT,
  updateISS,
  updateITC,
  updateWC,
} = require("../../Attendance/sem6");

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

route.post("/ac", AC);
route.post("/aec", AEC);
route.post("/ai", AI);
route.post("/sns", SNS);
route.post("/cd", CD);
route.post("/java", Java);
route.post("/cn", CN);
route.post("/os", OS);
route.post("/ds", DS);

route.post("/update/ac", updateAC);
route.post("/update/aec", updateAEC);
route.post("/update/ai", updateAI);
route.post("/update/sns", updateSNS);
route.post("/update/cd", updateCD);
route.post("/update/java", updateJava);
route.post("/update/cn", updateCN);
route.post("/update/os", updateOS);
route.post("/update/ds", updateDS);

route.post("/cg", CG);
route.post("/cv", CV);
route.post("/cc", CC);
route.post("/ccbt", CCBT);
route.post("/agt", AGT);
route.post("/iot", IOT);
route.post("/itc", ITC);
route.post("/wc", WC);
route.post("/es", ES);
route.post("/iss", ISS);

route.post("/update/cg", updateCG);
route.post("/update/cv", updateCV);
route.post("/update/cc", updateCC);
route.post("/update/ccbt", updateCCBT);
route.post("/update/agt", updateAGT);
route.post("/update/iot", updateIOT);
route.post("/update/itc", updateITC);
route.post("/update/wc", updateWC);
route.post("/update/es", updateES);
route.post("/update/iss", updateISS);

module.exports = route;
