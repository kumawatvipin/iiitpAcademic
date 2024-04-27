// controllers/pollController.js
const Poll = require("../../model/Poll/Poll");
const { success, error } = require("../../utils/wrapper");
// Create a new poll
const createPoll = async (req, res) => {
  try {
    console.log(req.body.poll);
    const email = req.body.poll.email;
    const semester = req.body.poll.sem;
    const section = req.body.poll.sec;
    const question = req.body.poll.question;
    const options = req.body.poll.options;
    const newPoll = await Poll.create({
      email,
      semester,
      section,
      question,
      options,
    });
    await newPoll.save();
    res.json(success(200, "Poll Cretaed  Successfully"));
  } catch (err) {
    return res.json(error(402, err.message));
  }
};

// Get all polls
const getAllPolls = async (req, res) => {
  try {
    // const email = req.body.poll.email;
    const polls = await Poll.find();
    return res.json(success(200, polls));
  } catch (err) {
    return res.json(error(402, err.message));
  }
};

const updatePoll = async (req, res) => {
  try {
    console.log(req.body);
    const _id = req.body.pollId;
    const option = req.body.somethings;
    const answer = req.body.answer;
    const newPoll = await Poll.findOne(_id);
    console.log(newPoll);
    if(!newPoll) return res.json(error(403,"Poll Deleted"))
    if (answer==="Yes") {
      newPoll.yes++;
    } else newPoll.no++;
    newPoll.somethings.push(option);
     console.log(newPoll);
    await newPoll.save();
    res.json(success(200, "Poll Submitted Successfully"));
  } catch (err) {
    return res.json(error(402, err.message));
  }
};
module.exports = { createPoll, getAllPolls, updatePoll };
