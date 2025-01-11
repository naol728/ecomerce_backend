const dontenv = require("dotenv");
const app = require("./index");
const connectDB = require("./config/dbconnection");

dontenv.config();

connectDB();

app.listen(process.env.PORT, () => {
  console.log("server started in port 3000");
});
