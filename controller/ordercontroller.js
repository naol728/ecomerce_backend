const Order = require("../model/ordermodel");

exports.getallorders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      status: "sucess",
      data: orders,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};
exports.getsingleorder = async (req, res) => {
  const orderid = req.params.id;
  try {
    const order = await Order.findById(orderid);
    if (!order) {
      res.status(200).json({
        message: "order is not found",
      });
    }
    res.status(200).json({
      status: "sucess",
      data: order,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};
exports.updateorder = async (req, res) => {
  const orderid = req.params.id;

  try {
    const updatedorder = req.body;
    const order = await Order.findByIdAndUpdate(orderid, updatedorder, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "sucess",
      data: order,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};
exports.deleteorder = async (req, res) => {
  const orderid = req.params.id;
  try {
    const order = await Order.findByIdAndDelete(orderid);
    res.status(200).json({
      status: "order deleted succesfully",
      data: order,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};
exports.addneworder = async (req, res) => {
  const { userId, items, totalAmount, status, orderDate } = req.body;
  try {
    const order = new Order({
      userId,
      items,
      totalAmount,
      status,
      orderDate,
    });
    await order.save();
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};
