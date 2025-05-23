const express = require("express");
const usercontroler = require("../controller/usercontroller");
const usersmiddleware = require("../middleware/usersmiddleware");
const authmiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router
  .route("/")
  .get(usercontroler.getallusers)
  .post(usersmiddleware.checkbody, usercontroler.addnewuser);
router
  .route("/:id")
  .get(usersmiddleware.checkid, usercontroler.getsingleuser)
  .patch(usersmiddleware.checkid, usercontroler.updateuser)
  .delete(usersmiddleware.checkid, usercontroler.deleteuser);

module.exports = router;
