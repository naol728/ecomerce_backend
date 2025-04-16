const User = require("../model/usermodel");

exports.checkbody = (req, res, next) => {
  const { password, email, name } = req.body;
  console.log(req.body);
  if (!password || !email || !name) {
    return res.status(400).json({
      status: "error",
      message: "name email password requred",
    });
  }
  next();
};
exports.checkid = async (req, res, next) => {
  const id = req.params.id;
  const finduser = await User.findById(id);
  if (!finduser) {
    return res.status(400).json({
      message: `no user found by ${id}`,
    });
  }
  next();
};
