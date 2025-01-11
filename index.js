const express = require("express");
const userrouter = require("./routers/userrouter");
const productrouter = require("./routers/productsrouter");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use("/users", userrouter);
app.use("/products", productrouter);

module.exports = app;
