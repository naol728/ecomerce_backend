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
  .get(productmiddleware.checkid, productcontroler.getsingleproduct)
  .patch(productmiddleware.checkid,productcontroler.updateproduct)
  .delete(productmiddleware.checkid, productcontroler.deleteproduct);

module.exports = router;
