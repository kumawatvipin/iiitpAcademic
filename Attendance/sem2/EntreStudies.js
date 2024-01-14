const User = require("../../model/Sem2/EntreStudies");
const { success, error } = require("../../utils/wrapper");
const EntreStudies = async (req, res) => {
  try {
    const sec = req.body.sec;
    const secA = [{}];
    const data = await User.find();
    let i=0;
    if(sec==="A"){
        for(i;i<135;i++){
            secA.push(data[i]);
        }
        return res.json(success(200, { secA }));
    }
    else {
        const secB=[{}];
        for(i=135;i<data.length;i++){
            secB.push(data[i]);
        }
        return res.json(success(200, { secB }));
    }

  } catch (err) {
    return res.json(error(401, err.message));
  }
};

module.exports = EntreStudies;
