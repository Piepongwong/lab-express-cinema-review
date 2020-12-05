import axios from "axios";
import React, { useState, useEffect } from "react";

function EditMovie(props) {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    image: "",
    description: "",
  });

  function handleChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    setMovie({
      ...movie,
      [inputName]: inputValue,
    });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movie/${props.match.params.movie_id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function editMovieHandler(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/movie/${props.match.params.movie_id}`, movie)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={editMovieHandler}>
      <input
        type="text"
        name="title"
        value={movie.title}
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="director"
        value={movie.director}
        placeholder="director"
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        value={movie.image}
        placeholder="image"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={movie.description}
        placeholder="description"
        onChange={handleChange}
      />
      {/* <input type="text" name="" value="" placeholder=""/>
            <input type="text" name="" value="" placeholder=""/> */}
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default EditMovie;

// const movieSchema = new Schema({
//     title: String,
//     director: String,
//     stars: [String],
//     image: String,
//     description: String,
//     showtimes: [String]
// })
