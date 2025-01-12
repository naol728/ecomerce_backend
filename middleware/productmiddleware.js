const Product = require("../model/productmodel");
exports.checkbody = (req, res, next) => {
  const { name, description, price, image, stock } = req.body;
  if (!name || !description || !price || !image || !stock) {
    return res.status(400).json({
      message: "missing the required filds",
    });
  }
  next();
};
exports.checkid = async (req, res, next) => {
  const product = await Product.findById(id);
  if (!product) {
    return res.status(400).json({
      message: `no product with ${id}`,
    });
  }
  next();
};
