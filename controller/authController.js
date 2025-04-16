const User = require("../model/usermodel");
const { generateToken } = require("../utils/jwtUtils");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user || (await user.checkPassword(password))) {
      res.status(401).json({
        message: "email or password is incorect",
      });
    }

    const token = generateToken(user._id);
    res.status(200).json({ message: "Login successful", status: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, passowrd });
  const token = generateToken(user._id);

  res.status(200).json({
    status: "sucess",
    user,
    token,
  });

  
};

const varify = async (req, res) => {
  res.status(200).json({ message: "varified", user: req.user });
};

module.exports = { login, varify, signup };
