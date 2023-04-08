const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({ role: "User" });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(200).send({ msg: "User already exist, please login" });
    }
    bcrypt.hash(password, 3, async (err, hash) => {
      const newUser = new UserModel({
        name,
        email,
        password: hash,
      });
      await newUser.save();

      res.status(200).send({ msg: "A new User has been created" });
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        res.status(200).send({
          msg: "Login Succussfull!",
          token: jwt.sign({ userID: user._id }, `${process.env.secretKey}`),
        });
      } else {
        res.status(400).send({ msg: "Wrong Credentials" });
      }
    });
  } else {
    res
      .status(400)
      .send({ msg: "You are not registered, please register first!" });
  }
};
module.exports = {
  register,
  getAllUsers,
  login,
};
