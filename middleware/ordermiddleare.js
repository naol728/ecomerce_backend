const Order = require("../model/ordermodel");
exports.checkbody = (req, res, next) => {
  const { userId, items, totalAmount } = req.body;
  if (!userId || !items || totalAmount) {
    res.status(400).json({
      message: "missing required bodys ",
    });
  }
  next();
};
exports.checkid = async (req, res, next) => {
  const orderid = req.params.id;
  const order = await Order.findById(orderid);
  if (!order) {
    return res.status(400).json({
      message: "order not found",
    });
  }
  next();
};
