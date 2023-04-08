const express = require("express");
const {
  register,
  getAllUsers,
  login,
  deleteUser,
  updateUserDetails,
} = require("../controller/user.controller");
const { auth } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/validator");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = {
  userRouter,
};
