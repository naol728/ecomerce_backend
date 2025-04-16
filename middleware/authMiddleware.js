const { verifyToken } = require("../utils/jwtUtils");

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(404).json({ error: "Access denied, no token provided" });
  }
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(400).json({ message: "Not authorized, no token" });
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Token is invalid or expired", error });
  }
};

module.exports = { protect };
