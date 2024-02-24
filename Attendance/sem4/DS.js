const User = require("../../model/sem4/DS");
const { success, error } = require("../../utils/wrapper");


const DS = async (req, res) => {
  try {
    const sec = req.body.sec;
    const secA = [{}];
    const data = await User.find();
    
    
    
    

    return res.json(success(200, { data }));

    

  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateDS = async (req, res) => {};



module.exports = { DS, updateDS };
