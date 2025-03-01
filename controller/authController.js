const User = require("../model/usermodel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwtUtils");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch)
    //   return res.status(401).json({ message: "Invalid email or password" });

    const token = generateToken(user._id);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server  error", error });
  }
};

module.exports = { login };
