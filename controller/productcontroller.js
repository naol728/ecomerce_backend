const Product = require("../model/productmodel");

exports.getallproducts = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestTime: req.requestTime,
    message: "all products",
  });
};
exports.getsingleproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({
        message: `no product with ${id}`,
      });
    }
    res.status(200).json({
      message: "found",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      message: "intrnal server error",
    });
  }
};
exports.updateproduct = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestTime: req.requestTime,
    message: "update the product",
  });
};
exports.deleteproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(400).json({
        status: "fail",
        message: "can not find the product",
      });
    }
    res.status(301).json({
      status: "sucessfully deleted ",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "internal server error",
    });
  }
};
exports.addnewproduct = async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    stock,
    image,
    brand,
    rating,
    numReviews,
    isFeatured,
  } = req.body;
  const newproduct = new Product({
    name,
    description,
    price,
    category,
    stock,
    image,
    brand,
    rating,
    numReviews,
    isFeatured,
  });
  await newproduct.save();

  res.status(201).json({
    ststus: "sucessfuly added new product",
    data: newproduct,
  });
};
