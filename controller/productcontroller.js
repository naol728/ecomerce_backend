const Product = require("../model/productmodel");

exports.getallproducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "sucess",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};
exports.getsingleproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
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
exports.updateproduct = async (req, res) => {
  const productid = req.params.id;
  const updateData = req.body;

  try {
    const product = await Product.findByIdAndUpdate(productid, updateData, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: `successfuly updated `,
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: "internal server error",
      message: err,
    });
  }
};
exports.deleteproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);

    res.status(200).json({
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
  console.log(req.body);
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
