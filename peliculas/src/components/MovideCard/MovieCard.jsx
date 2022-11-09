import React from 'react';
import './movieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;
  return (
    <li className='li_MovieCard'>
      <Link to={ "/movies/"+movie.id }> 
        <img className='li_Movie_img' 
          width={230} 
          height={345} 
          src={imageUrl} 
          alt={movie.title} 
        />
        <h2 className='li_Movie_title'>{movie.title}</h2>
      </Link>
    </li>
  )
}

export default MovieCard