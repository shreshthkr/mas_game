const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const validator = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, `${process.env.secretKey}`);
    const user = await UserModel.findOne({ _id: decoded.userID });
  }
  next();
};

module.exports = {
  validator,
};
