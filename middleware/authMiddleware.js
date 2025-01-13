const { verifyToken } = require("../utils/jwtUtils");

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split('.')[1];
  console.log(token)
  if (!token)
    return res.status(401).json({ message: "Not authorized, no token" });

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is invalid or expired" });
  }
};

module.exports = { protect };
