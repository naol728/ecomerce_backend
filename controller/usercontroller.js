const User = require("../model/usermodel");

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
exports.updateuser = async (req, res) => {
  const userid = req.params.id;
  const updateData = req.body;

  try {
    const user = await User.findByIdAndUpdate(userid, updateData, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: `successfuly updated `,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "internal server error",
      message: err,
    });
  }
};
exports.deleteuser = async (req, res) => {
  const userid = req.params.id;
  try {
    const user = await User.findByIdAndDelete(userid);
    res.status(201).json({
      status: `sucesssfully deleted ${user}`,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: "inetrnal serever error",
    });
  }
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

  res.status(201).json({
    status: "new user saved succesfuly",
    data: Newuser,
  });
};
