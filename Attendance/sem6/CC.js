const User = require("../../model/sem6/CC");
const { success, error } = require("../../utils/wrapper");

const CC = async (req, res) => {
  try {
    const sec = req.body.sec;
    const secA = [{}];
    const data = await User.find();

    let i = 0;
    
    if(sec=="A"){
      for (i; i < 102; i++) {
        secA.push(data[i]);
      }
  
      return res.json(success(200, { secA }));
    }
    else {
      const secB=[{}];
      i=102;
      for(i;i<data.length;i++){
        secB.push(data[i]);
      }
      return res.json(success(200, { secB }));
    }
   
  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateCC = async (req, res) => {};

module.exports = { CC, updateCC };
