exports.getallusers = (req, res) => {
  res.status(200).json({
    status: "sucesss",
    message: "get all users",
  });
};
exports.getsingleuser = (req, res) => {
  res.status(200).json({
    status: "sucesss",
    message: "get single user",
  });
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
exports.addnewuser = (req, res) => {
  res.status(200).json({
    status: "sucesss",
    message: "add new user",
  });
};
