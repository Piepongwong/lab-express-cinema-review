import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home = (props) => {
  const [ movies, setMovies] = useState(false)
  function callMyBackend() {
    axios
      .get("http://localhost:5000/movies")
      .then((responseFromBackend) => {
        console.log(responseFromBackend);
        setMovies(responseFromBackend.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <button onClick={callMyBackend}>Test Backend Call</button>
      <h1>Welcome to Express Cinema</h1>
      {movies && movies.map((movie)=> 
        <div>
          <h1>{movie.title}</h1>
          <Link to={`/film/${movie._id}`}>Go to detail</Link>
          <Link to={`/movie/edit/${movie._id}`}>Edit this movie</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
