const express = require("express");
const userRouter = express.Router();
const userController = require("../Controller/userController");

userRouter.get("/", (req, res) => {
  res.send("<h1>hello user</h1>");
});

userRouter.post("/login", userController.createToken);

userRouter.post("/mail", userController.sendMail);
module.exports = userRouter;
