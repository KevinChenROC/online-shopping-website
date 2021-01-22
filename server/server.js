const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./models/user");

const app = express();

dotenv.config();

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

//routing
app.get("/", (req, res) => {
  res.json("hello world!");
});

app.post("/", (req, res) => {
  let user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save((err) => {
    if (err) res.json(err);
    else res.json("successfully saved");
  });
});

// start listening
app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log("Listening on the port", process.env.PORT);
});
