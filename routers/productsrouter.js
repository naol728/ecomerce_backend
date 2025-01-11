const express = require("express");
const productcontroler = require("../controller/productcontroller");

const router = express.Router();

router
  .route("/")
  .get(productcontroler.getallproducts)
  .post(productcontroler.addnewproduct);

router
  .route("/:id")
  .get(productcontroler.getsingleproduct)
  .patch(productcontroler.updateproduct)
  .delete(productcontroler.deleteproduct);

module.exports = router;
