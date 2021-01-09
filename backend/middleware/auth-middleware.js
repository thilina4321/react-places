const jwt = require("jsonwebtoken");
const User = require("../model/user");

const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const decordedToken = await jwt.verify(token, "thisisthesecretkey");
    const user = await User.findOne({
      _id: decordedToken.id,
      "tokens.token": token,
    });

    if(!user){
      throw new Error('No access')
    }

    req.user = user
    req.token = token
    next();

  } catch (err) {
    throw new Error(err);
  }
};

module.exports = auth;
