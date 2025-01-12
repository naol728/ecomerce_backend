const express = require("express");
const productcontroler = require("../controller/productcontroller");
const productmiddleware = require("../middleware/productmiddleware");
const router = express.Router();

router
  .route("/")
  .get(productcontroler.getallproducts)
  .post(productmiddleware.checkbody, productcontroler.addnewproduct);

router
  .route("/:id")
  .get(productcontroler.getsingleproduct)
  .patch(productcontroler.updateproduct)
  .delete(productcontroler.deleteproduct);

module.exports = router;
