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

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);

// start listening
app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log("Listening on the port", process.env.PORT);
});
