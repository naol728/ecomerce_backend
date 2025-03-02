const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Google OAuth Routes
router.get("/google", authController.googleAuth);
router.get(
  "/google/callback",
  authController.googleAuthCallback,
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// Dashboard Route
router.get("/dashboard", authController.dashboard);

// Logout
router.get("/logout", authController.logout);

module.exports = router;
