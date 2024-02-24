const User = require("../../model/sem6/ITC");
const { success, error } = require("../../utils/wrapper");

const ITC = async (req, res) => {
  try {
    const sec = req.body?.sec;

    const data = await User.find();
    return res.json(success(200, { data }));
  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateITC = async (req, res) => {};

module.exports = { ITC, updateITC };
