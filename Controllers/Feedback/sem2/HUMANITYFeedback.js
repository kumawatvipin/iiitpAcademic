const user=require("../../../model/feedback/HUMANITY")
const { success, error } = require("../../../utils/wrapper");
const HUMANITYFeedback = async (req,res)=>{


    
    try {
        const DateofFeedback=req.body.DateofFeedback;
        const email=req.body.email;
        const Attendance=req.body.Attendance;
        const CGPA=req.body.CGPA;
        const knowledgeSkill=req.body.knowledgeSkill;
        const Coverageanddepth=req.body.Coverageanddepth;
        const fundamentalconcepts=req.body.fundamentalconcepts;
       
        const oralpresentation=req.body.oralpresentation;
        const think=req.body.think;
        const transparent=req.body.transparent;
        const Examination=req.body.Examination;
        const overall=req.body.overall;
        const additionalcomments=req.body.additionalcomments;
        const approachability=req.body.approachability;
        const result= await user.create({additionalcomments,overall,transparent,Examination,approachability,think,oralpresentation,fundamentalconcepts,knowledgeSkill,Coverageanddepth,CGPA,Attendance,DateofFeedback,email,});

        await result.save();
        return res.json(success(200, {result}));
    } catch (err) {
        
        return res.json(error(401, err.message));
    }
}

const getHUMANITY = async (req, res) => {
    try {
     
      const data = await user.find();
      res.json(success(200, data));
    } catch (err) {
      res.json(error(402, error.message));
  }
  };
module.exports={HUMANITYFeedback,getHUMANITY}