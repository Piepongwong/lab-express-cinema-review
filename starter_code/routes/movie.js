const express = require("express");
const app = express();
const Movie = require("../models/Movie");

app.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      res.status(500).json({ message: "Ooooeps" });
    });
});

module.exports = app;
