import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import get from '../../services/API'
import GetMovieImg from '../../utils/GetMovieImg';
import './movieDetails.scss';

const MovieDetails = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    
    useEffect(() => {
        get('/movie/'+movieId).then((data) => {
            setMovie(data);
            setGeneros(data.genres[0]);
        })
    }, [movieId])

    const ImageUrl = GetMovieImg(movie.poster_path, 300);
    return (
        <div className='movieDetails_Container'>
            <img className='movieDetails_Img' src={ImageUrl} alt={movie.title} />
            <div className='movieDetails_Info'>
                <div className='titulo_MD_Cont'>
                    <strong className='titulo'>Titulo: </strong>
                    <p>{movie.title}</p>
                </div>
                <div className='genero_MD_Cont'>
                    <strong className='titulo'>Genero: </strong>
                    <p>{generos.name}</p>
                </div>
                <div className='descripcion_MD_Cont'>
                    <strong className='titulo'>Descripcion: </strong>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails