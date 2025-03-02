const express = require("express");
const userrouter = require("./routers/userrouter");
const productrouter = require("./routers/productsrouter");
const orderroute = require("./routers/orderroute");
const authRoutes = require("./routers/authRoutes");
const cors = require("cors");
const app = express();

// const authRoutes = require("./");
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userrouter);
app.use("/api/products", productrouter);
app.use("/api/order", orderroute);

module.exports = app;
