const express = require("express");
const ordercontroller = require("../controller/ordercontroller");
const routes = express.Router();
routes
  .route("/")
  .get(ordercontroller.getallorders)
  .post(ordercontroller.addneworder);
routes
  .route("/:id")
  .get(ordercontroller.getsingleorder)
  .patch(ordercontroller.updateorder)
  .delete(ordercontroller.deleteorder);

module.exports = routes;
