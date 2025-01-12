exports.checkbody = (req, res, next) => {
  const { name, description, price, image, stock } = req.body;
  if (!name || !description || !price || !image || !stock) {
    return res.status(400).json({
      message: "missing the required filds",
    });
  }
  next();
};
