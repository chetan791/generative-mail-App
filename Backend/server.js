const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/DB");
const userRouter = require("./Routes/userRoutes");
const dotenv = require("dotenv").config();

app.use(
  cors({
    origin: process.env.FrontendUrl,
  })
);
app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is running on port", process.env.port);
  } catch (error) {
    console.log("error in server", error);
  }
});
