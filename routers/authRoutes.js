const express = require("express");
const { login, varify } = require("../controller/authController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", login);
router.post("/signup")
router.post("/protect", protect, varify);
module.exports = router;
