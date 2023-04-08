const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token) {
    const decoded = jwt.verify(token, `${process.env.secretKey}`);
    //   console.log(decoded)

    if (decoded) {
      req.body.userID = decoded.userID;
      req._id = decoded.userID;
      next();
    } else {
      res.status(400).send({ msg: "Please Login first" });
    }
  } else {
    res.status(400).send({ msg: "Please Login first" });
  }
};

module.exports = {
  auth,
};
