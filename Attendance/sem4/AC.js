const User = require("../../model/sem4/AC");
const { success, error } = require("../../utils/wrapper");


const AC = async (req, res) => {
  try {
    const sec = req.body.sec;
    const secA = [{}];
    const data = await User.find();
    
    
    
    

    return res.json(success(200, { data }));

    

  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateAC = async (req, res) => {};



module.exports = { AC, updateAC };
