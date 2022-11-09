import React from 'react';
import './movieCard.scss';

const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;
  return (
    <li className='li_MovieCard'>
      <img className='li_Movie_img' 
        width={230} 
        height={345} 
        src={imageUrl} 
        alt="movie.title" 
      />
      <h2 className='li_Movie_title'>{movie.title}</h2>
    </li>
  )
}

export default MovieCard