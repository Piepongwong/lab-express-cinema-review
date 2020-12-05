import axios from 'axios';
import React, {useState} from 'react'

function AddMovie() {
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        image: "",
        description: ""
    })
    
    function handleChange(event){
        let inputName = event.target.name;
        let inputValue = event.target.value;

        setMovie({
            ...movie,
            [inputName]: inputValue
        })
    }

    function addMovieHandler(event){
        event.preventDefault();
        axios.post("http://localhost:5000/movie", movie)
            .then((response)=> {
                console.log(response)
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    return (
        <form onSubmit={addMovieHandler}>
            <input type="text" name="title" value={movie.title} placeholder="title" onChange={handleChange}/>
            <input type="text" name="director" value={movie.director} placeholder="director" onChange={handleChange}/>
            <input type="text" name="image" value={movie.image} placeholder="image" onChange={handleChange}/>
            <input type="text" name="description" value={movie.description} placeholder="description" onChange={handleChange}/>
            {/* <input type="text" name="" value="" placeholder=""/>
            <input type="text" name="" value="" placeholder=""/> */}
            <button type="submit">Add Movie</button>
        </form>
    )
}

export default AddMovie

// const movieSchema = new Schema({
//     title: String,
//     director: String,
//     stars: [String],
//     image: String,
//     description: String,
//     showtimes: [String]
// })
