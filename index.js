const express = require("express");
const app = express();
app.use(express.json({ limit: "10mb" }));
const dotenv = require("dotenv");
dotenv.config("./.env");
const PORT = process.env.PORT;
const Db = require("./DbConnect");

const Sem2SecARouter = require("./router/Sem/Sem2/SecA");
const Sem2SecBRouter = require("./router/Sem/Sem2/secB");
const Sem4SecARouter = require("./router/Sem/sem4/SecA");
const Sem4SecBRouter = require("./router/Sem/Sem4/SecB");
const Sem6SecARouter = require("./router/Sem/Sem6/SecA");
const Sem6SecBRouter = require("./router/Sem/Sem6/SecB");

app.get("/", (req, res) => {
  res.send("connected");
});

app.use("/sem2/secA", Sem2SecARouter);
app.use("/sem2/secB", Sem2SecBRouter);
app.use("/sem4/secA", Sem4SecARouter);
app.use("/sem4/secB", Sem4SecBRouter);
app.use("/sem6/secA", Sem6SecARouter);
app.use("/sem6/secB", Sem6SecBRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  Db();
});
