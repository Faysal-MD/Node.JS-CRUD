const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
// add data by using postman API
app.use(express.json());

// routes
app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("Hello from Node API Server");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.zfoahef.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("MongoDB is Connected!");

    app.listen(3000, () => {
      console.log("Server is runnig on port 3000");
    });
  })
  .catch(() => {
    console.log("MongoDB connection failed!");
  });
