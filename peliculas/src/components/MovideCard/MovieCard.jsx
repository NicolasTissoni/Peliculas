import React, { useContext } from 'react';
import './movieCard.scss';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext/UserContext';

const MovieCard = ({ movie }) => {
  const { user, toggleFavouriteMoviesToUser } = useContext(UserContext)
  const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;
  const isFavourite = user?.favouriteMovies?.includes(movie.id);
  return (
    <li className='li_MovieCard'>
      <Link to={ "/movies/" + movie.id }> 
        <img className='li_Movie_img' 
          width={230} 
          height={345} 
          src={imageUrl} 
          alt={movie.title} 
        />
      </Link>
        <h2 className='li_Movie_title'>{movie.title}</h2>
        { user?.id &&  
        <button onClick={() => toggleFavouriteMoviesToUser(movie.id)} className={
          `btn-card 
          ${isFavourite 
            ? 'btn-success' 
            : 'btn-card'}`
            }
          >
          Favoritos
        </button>
        }
    </li>
  )
}

export default MovieCard