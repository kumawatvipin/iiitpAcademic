const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    semester: { type: String, required: true },
    section: { type: String, required: true },
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    yes: {
      type: Number,
      default: 0,
    },
    no: {
      type: Number,
      default: 0,
    },
    somethings: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Poll", userSchema);
