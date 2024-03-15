const jwt = require("jsonwebtoken");

const verifyToken = async (token, secret) => {
  try {
    const decoded = await jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    throw new Error("Token verification failed.");
  }
};

module.exports = { verifyToken };
