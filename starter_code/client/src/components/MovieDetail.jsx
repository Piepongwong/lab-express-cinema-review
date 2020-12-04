import React, {useEffect, useState} from 'react'
import axios from "axios";

function MovieDetail(props) {
    debugger
    const [movie, setMovie] = useState(false);
    useEffect(()=> {
        axios.get(`/movie/${props.match.params.reactroutermovieid}`)
            .then((response)=> {
                setMovie(response.data)
            })
            .catch((err)=> {
                // handle error
            })
    },[])
    return (
        <div>
            <h1>Movie Detail</h1>
            {movie && 
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                </div>
            }
        </div>
    )
}

export default MovieDetail
