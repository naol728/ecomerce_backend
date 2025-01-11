const express = require("express");
const usercontroler = require("../controller/usercontroller");
const router = express.Router();
router
  .route("/")
  .get(usercontroler.getallusers)
  .post(usercontroler.checkbody, usercontroler.addnewuser);
router
  .route("/:id")
  .get(usercontroler.getsingleuser)
  .patch(usercontroler.updateuser)
  .delete(usercontroler.updateuser);

module.exports = router;
