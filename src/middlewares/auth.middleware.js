const { verifyToken } = require("../utilities/auth.utils");

const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = await verifyToken(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Unauthorized: Token expired" });
    } else {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  }
};

module.exports = { authenticateToken };
