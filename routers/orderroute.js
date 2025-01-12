const express = require("express");
const ordercontroller = require("../controller/ordercontroller");
const ordermiddleware = require("../middleware/ordermiddleare");
const routes = express.Router();
routes
  .route("/")
  .get(ordercontroller.getallorders)
  .post(ordermiddleware.checkbody, ordercontroller.addneworder);
routes
  .route("/:id")
  .get(ordermiddleware.checkid, ordercontroller.getsingleorder)
  .patch(ordermiddleware.checkid, ordercontroller.updateorder)
  .delete(ordermiddleware.checkid, ordercontroller.deleteorder);

module.exports = routes;
