import React, { Component } from "react";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import {Route} from "react-router-dom";

const App = (props)=> {

    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/film/:id" component={MovieDetail} />
       </div>
    );
 
}

export default App;
