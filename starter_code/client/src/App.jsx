import React, { Component } from "react";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import {Route} from "react-router-dom";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";

const App = (props)=> {

    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/add-movie" component={AddMovie} />
        <Route exact path="/movie/edit/:movie_id" component={EditMovie} />

        
        <Route path="/film/:reactroutermovieid" component={MovieDetail} />
       </div>
    );
 
}

export default App;
