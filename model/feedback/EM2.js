const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    DateofFeedback: {
      type: String,
      required: true,
      select: false,
    },
    Attendance: {
      type: String,
     
    },
    CGPA: {
      type: String,
      
    },
    Coverageanddepth: {
      type: String,
   
    },
    knowledgeSkill: {
      type: String,
   
    },
    fundamentalconcepts: {
      type: String,
     
    },
    oralpresentation: {
      type: String,
      
    },
    think: {
      type: String,
    
    },
    approachability: {
      type: String,
      
    },
    Examination: {
      type: String,
      
    },
    transparent: {
      type: String,
     
    },
    overall: {
      type: String,
     
    },
    additionalcomments: {
        type: String,
      
     
      }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FeedbackEM2", userSchema);
