const express = require("express");
const app = express();
app.use(express.json({ limit: "10mb" }));
const dotenv = require("dotenv");
dotenv.config("./.env");
const PORT = process.env.PORT;
const Db = require("./DbConnect");

const Sem2Router = require("./router/Sem/Sem2");
const Sem4Router = require("./router/Sem/Sem4");
const Sem6SecARouter = require("./router/Sem/Sem6/SecA");
const Sem6SecBRouter = require("./router/Sem/Sem6/SecB");

app.get("/", (req, res) => {
  res.send("connected");
});

app.use("/sem6/secA", Sem6SecARouter);
app.use("/sem6/secB", Sem6SecBRouter);
app.use("/sem2", Sem2Router);
app.use("/sem4", Sem4Router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  Db();
});
