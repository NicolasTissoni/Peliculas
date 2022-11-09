import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from '../views/navBar/NavBar';
import LandingPage from '../views/landingPage/LandingPage';
import MovieDetails from '../views/movieDetails/MovieDetails';

const MyRoutes = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path='/movies/:movieId' element={<MovieDetails/>} />
            </Routes>
        </Router>
    )
}

export default MyRoutes;