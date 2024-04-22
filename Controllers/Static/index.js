const User = require("../../model/Static/Stat");
const { success, error } = require("../../utils/wrapper");
const update = async (req, res) => {
  try {
    const name = req.body.name;
    const mis = req.body.mis;
    const sem = req.body.sem;
    const s1 = req.body.s1;
    const s2 = req.body.s2;
    const s3 = req.body.s3;
    const s4 = req.body.s4;
    const s5 = req.body.s5;
    const s6 = req.body.s6;
    const s7 = req.body.s7;
    const CGPA = req.body.CGPA;
    const Attendance = req.body.Attendance;

    const newUser = await User.create({
      name,
      mis,
      sem,
      s1,
      s2,
      s3,
      s4,
      s5,
      s6,
      s7,
      CGPA,
      Attendance,
    });

    await newUser.save();
    res.json(success(200, "Data added Successfully"));
  } catch (err) {
    res.json(error(402, err.message));
  }
};
const get = async (req, res) => {
  try {
    const mis = req.body.mis;

    const data = await User.find({ mis });
    res.json(success(200, { data }));
  } catch (err) {
    res.json(error(402, err.message));
  }
};

module.exports = { update, get };
