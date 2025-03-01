const multer = require("multer");
const path = require("path");

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid conflicts
  },
});

// Initialize Multer
const upload = multer({ storage, limits: { fileSize: 1024 * 1024 * 5 } });

module.exports = upload;
