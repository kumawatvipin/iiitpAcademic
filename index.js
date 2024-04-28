const express = require("express");
const app = express();
app.use(express.json({ limit: "10mb" }));
const dotenv = require("dotenv");
dotenv.config("./.env");
const PORT = process.env.PORT;
const Db = require("./DbConnect");
const cookie = require("cookie-parser");
const cors = require("cors");
const Sem2Router = require("./router/Sem/Sem2");
const Sem4Router = require("./router/Sem/sem4");
const Sem6Router = require("./router/Sem/sem6");
const teacherRouter = require("./router/Teacher");
const studentRouter = require("./router/Student");
const attendanceRouter = require("./router/AttendanceShow");
const marksRouter = require("./router/Marks");
const statsRouter = require("./router/Static");
const Poll = require("./router/Poll");
const feedbackRouter = require("./router/feedback");
// const morgan = require('morgan')
app.use(
  cors({
    credentials: true,
    // origin: "http://localhost:3000/",
    origin: process.env.Client_URL,
  })
);

app.use(cookie());
// app.use(morgan("common"));
app.get("/", (req, res) => {
  res.send("connected");
});
app.use(require("./router/route.js"));
app.use("/sem2", Sem2Router);
app.use("/sem4", Sem4Router);
app.use("/sem6", Sem6Router);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/attendance", attendanceRouter);
app.use("/marks", marksRouter);
app.use("/stats", statsRouter);
app.use("/polls", Poll);
app.use("/feedback", feedbackRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  Db();
});
