const mongoose = require("mongoose");
const localuri = "mongodb://127.0.0.1:27017";
// process.env.DBURL
const connectDB = async () => {
  try {
    await mongoose.connect(localuri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
