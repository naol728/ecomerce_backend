const express = require("express");
const productcontroler = require("../controller/productcontroller");
const productmiddleware = require("../middleware/productmiddleware");
const router = express.Router();
const upload = require("../middleware/upload");
router
  .route("/")
  .get(productcontroler.getallproducts)
  .post(
    productmiddleware.checkbody,
    upload.single("image"),
    productcontroler.addnewproduct
  );

router
  .route("/:id")
  .get(productmiddleware.checkid, productcontroler.getsingleproduct)
  .patch(productmiddleware.checkid, productcontroler.updateproduct)
  .delete(productmiddleware.checkid, productcontroler.deleteproduct);

module.exports = router;
