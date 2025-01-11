const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("this is get all user route");
  })
  .post((req, res) => {
    res.send("this is add new user route ");
  });
router
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    res.send(`this get single user route ${id}`);
  })
  .patch((req, res) => {
    res.send("this is update user route ");
  });

module.exports = router;
