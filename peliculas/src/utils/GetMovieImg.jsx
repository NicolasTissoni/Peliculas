import React from 'react'
import PlaceHolder from '../images/placeholder.png';

const GetMovieImg = (path, width) => {
    return path ?
    `https://image.tmdb.org/t/p/w${width}${path}` 
        : 
    <PlaceHolder /> 
}

export default GetMovieImg