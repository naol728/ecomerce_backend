const express = require("express");
const router = express.Router();
router
  .route("/")
  .get((req, res) => {
    res.send("get all products");
  })
  .post((req, res) => {
    res.send("this add product");
  });
router
  .route("/:id")
  .get((req, res) => {
    res.send("this is from get a single product");
  })
  .patch((req, res) => {
    res.send("this is update a single product");
  })
  .delete((req, res) => {
    res.send("this is from delete a single product");
  });
module.exports=router