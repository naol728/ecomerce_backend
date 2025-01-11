exports.getallproducts = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestTime: req.requestTime,
    message: "all products",
  });
};
exports.getsingleproduct = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestTime: req.requestTime,
    message: "get a single user",
  });
};
exports.updateproduct = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestTime: req.requestTime,
    message: "update the product",
  });
};
exports.deleteproduct = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestTime: req.requestTime,
    message: "delete the product",
  });
};
exports.addnewproduct = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestTime: req.requestTime,
    message: "add new product",
  });
};
