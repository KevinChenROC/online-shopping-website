const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./models/user");

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
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//require APIs
const productRoutes = require("./routes/product");
app.use("/api", productRoutes);

// start listening
app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log("Listening on the port", process.env.PORT);
});
