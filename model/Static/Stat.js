const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,

      
    },
    mis: {
      type: String,
      required: true,
    },
   
    sem: {
      type: String,
      required: true,
    },
    s1: {
      type: String,
      
    },
   s2: {
      type: String,
    
    },
    s3: {
      type: String,
    
    },
    s4: {
      type: String,

    },
    s5: {
      type: String,
  
    },
    s6: {
      type: String,
   
    },
    s7: {
      type: String,

    },
    Attendance: {
      type: String,
      required: true,
    },
    CGPA: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stat", userSchema);
