const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    MIS: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,

      uppercase: true,
    },
    currentPresent: {
      type: Number,
      require: true,
    },
    currentAbsent: {
      type: Number,
      require: true,
    },
    currentPercentage: {
      type: Number,
      require: true,
    },
    totalClass: {
      type: Number,
      require: true,
    },
    current: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SEM6SecB", userSchema);
