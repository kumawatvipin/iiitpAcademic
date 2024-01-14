const User = require("../../model/Teacher/Teacher");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { success, error } = require("../../utils/wrapper");
const TeacherSignupControllers = async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const subject = req.body.subject;
    const sem = req.body.sem;

    if (!email || !name || !password || !subject || !sem)
      return res.status(402).json({ message: "All filed Required" });
    const oldUser = await User.findOne({ email });
    if (oldUser && oldUser?.subject === subject) {
      return res.status(409).send("Email and Subject already in use");
    }
    const newUser = await User.create({
      email,
      name,
      password,
      subject,
      sem,
    });

    newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(401).json({ error, message: "Error in Controllers" });
  }
};
const TeacherloginController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    // return res.status(404).send("all fileds required");
    return res.send(error(402, "all fileds required"));
  }

  const olduser = await User?.findOne({ email })?.select("+password");
  if (!olduser) {
    // return res.status(404).send("user not found");
    return res.send(error(404, "user not found"));
    //   return res.send(error(404, "user not found"));
  }
  const verri = password === olduser?.password;
  // const verri = await bcrypt?.compare(password, olduser?.password);
  if (!verri) {
    // return res.status(401).send("Incorrect password");
    return res.send(error(403, "Incorrect password"));
  }

  const token = generateAccesstoken({ _id: olduser._id });
  const Referstoken = generateRefershtoken({ _id: olduser._id });
  res.cookie("jwt", Referstoken, {
    httponly: true,
    secure: true,
  });
  res.json(success(200, { token }));
  // res.send({token})
};

const generateAccesstoken = data => {
  try {
    const token = jwt.sign(data, process.env.accessToken, {
      expiresIn: "1y",
    });

    return token;
  } catch (e) {
    // return res.send(e.message);
    return res.send(error(500, e.message));
  }
};

const generateRefershtoken = data => {
  try {
    const token = jwt.sign(data, process.env.RefershToken, {
      expiresIn: "1y",
    });

    return token;
  } catch (e) {
    return res.send(error(500, e.message));
    // return ressend(e.message);
  }
};

module.exports = { TeacherSignupControllers, TeacherloginController };
