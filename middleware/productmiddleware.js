const Product = require("../model/productmodel");
const upload = require("./upload"); // Import Multer middleware

exports.checkbody = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error("Multer Error:", err); // Log the Multer error
      return res
        .status(400)
        .json({ message: "File upload error", error: err.message });
    }

    // Log the request body and file
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { name, description, price, stock } = req.body;
    const image = req.file ? req.file.path : null; // Get the file path if uploaded

    if (!name || !description || !price || !stock || !image) {
      return res.status(400).json({
        message: "Missing the required fields",
      });
    }

    // Attach the file path and other fields to the request object for later use
    req.productData = { name, description, price, stock, image };

    // // Attach the file path to the request object for later use
    // req.imagePath = image;

    next();
  });
};
exports.checkid = async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(400).json({
      message: `no product with ${id}`,
    });
  }
  next();
};
