import React, { useState, useEffect} from 'react'

import './movieCardContext.scss';

import MovieCard from '../../components/MovideCard/MovieCard';
import get from '../../services/API';

const MovieCardContext = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);
    return (
        <ul className='context_MC_Container'>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}

export default MovieCardContext