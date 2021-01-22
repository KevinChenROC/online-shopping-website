const PORT = 3000;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

var app = express();

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routing
app.get("/", (req, res) => {
  res.json("hello world!");
});

app.post("/", (req, res) => {
  console.log(req.body.name);
  res.json("success");
});

// start listening
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log("Listening on the port", PORT);
});
