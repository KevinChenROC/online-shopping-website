//Import 3rd party libraries
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

//Initiate environment variables
const app = express();
dotenv.config();

//Connect to MongoDB Cloud
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log("Connected to the database");
  }
);

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routing config
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const ownerRoutes = require("./routes/owner");
const authRouter = require("./routes/auth");
const reviewRouter = require("./routes/review");
const addressRouter = require("./routes/address");
const paymentRouter = require("./routes/payment");
const orderRouter = require("./routes/order");

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);
app.use("/api", authRouter);
app.use("/api", reviewRouter);
app.use("/api", addressRouter);
app.use("/api", paymentRouter);
app.use("/api", orderRouter);

// start listening
app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log("Listening on the port", process.env.PORT);
});
