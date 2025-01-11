const User = require("../model/usermodel");

exports.checkbody = (req, res, next) => {
  const { password, email, name } = req.body;
  if (!password || !email || !name) {
    return res.status(400).json({
      status: "error",
      message: "name email password requred",
    });
  }
  next();
};

exports.getallusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "sucess",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      ststus: "fail",
      message: err,
    });
  }
};
exports.getsingleuser = async (req, res) => {
  const userid = req.params.id;
  try {
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({
        status: "faild",
        message: `no user found${userid}`,
      });
    }
    res.status(200).json({
      ststus: "sucess",
      message: user,
    });
  } catch (err) {
    res.status(500).json({
      stutus: "internal server error",
      message: err,
    });
  }
};
exports.updateuser = (req, res) => {
  res.status(200).json({
    status: "sucesss",
    message: "update single user",
  });
};
exports.deleteuser = (req, res) => {
  res.status(200).json({
    status: "sucesss",
    message: "delete user",
  });
};
exports.addnewuser = async (req, res) => {
  const { name, email, password, isAdmin, profileImage, phone } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  const Newuser = new User({
    name,
    email,
    password,
    isAdmin,
    profileImage,
    phone,
  });

  await Newuser.save();

  res.status(200).json({
    status: "new user saved succesfuly",
    message: Newuser,
  });
};
