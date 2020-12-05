require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(cors());
app.options("*", cors()); // include before other routes

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const index = require("./routes/index");
const Movie = require("./models/Movie");
app.use("/", index);

const movies = require("./routes/movies");
app.use("/", movies);

app.post("/movie", (req, res) => {
  console.log(req.body);
  Movie.create(req.body)
    .then((insertedMovie) => {
      res.send("movie inserted");
    })
    .catch((err) => {
      res.status(500).send("OOooeps");
    });
});

app.put("/movie/:movieId", (req, res) => {
  console.log(req.body);
  Movie.findByIdAndUpdate(req.params.movieId, req.body)
    .then((oldMovie) => {
      res.send("oke");
    })
    .catch((err) => {
      res.status(500).send("OOooeps");
    });
});
// const movie = require("./routes/movie");
// app.use("/", movie);

module.exports = app;
