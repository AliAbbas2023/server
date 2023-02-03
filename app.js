// require('dotenv').config()
require("express-async-errors");

const express = require("express");
const app = express();

const port = 3000;

const Product = require("./Model/product");

const connectDB = require("./db/connect");
const productRouter = require("./Routes/router");

app.use("/api/v1/products", productRouter);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
