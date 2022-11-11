import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from '../views/navBar/NavBar';
import LandingPage from '../views/landingPage/LandingPage';
import MovieDetails from '../views/movieDetails/MovieDetails';
import { UserProvider } from '../context/userContext/UserContext';

const MyRoutes = () => { 
    return (
        <Router>
            <UserProvider>
            <NavBar />
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path='/movies/:movieId' element={<MovieDetails/>} />
                </Routes>
            </UserProvider>
        </Router>
    )
}

export default MyRoutes;