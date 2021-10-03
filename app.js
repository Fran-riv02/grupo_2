const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

const homeRouter = require("./routes/home");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const carritoRouter = require("./routes/carrito");
const descriptionRouter = require("./routes/description");
const productListRouter = require("./routes/productList");
const adminRouter = require("./routes/admin"); //agregado bux 03/10


app.use("/", homeRouter);
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", carritoRouter);
app.use("/", descriptionRouter);
app.use("/", productListRouter);
app.use("/admin", adminRouter); //agregado bux 03/10

app.listen(3000, function () {
  console.log("Server 3000 running");
});

app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
