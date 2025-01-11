const express = require("express");
const userrouter = require("./routers/userrouter");
const productrouter = require("./routers/productsrouter");
const app = express();

app.use("/users", userrouter);
app.use("/products", productrouter);

app.get("/", (req, res) => {
  res.send("this is root url");
});
module.exports = app;
