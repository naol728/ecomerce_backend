const app = require("./index");
const connectDB = require("./config/dbconnection");
const dontenv = require("dotenv");
dontenv.config();
connectDB();
app.listen(process.env.PORT, () => {
  console.log("server started in port 3000");
});
