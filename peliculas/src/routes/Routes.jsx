import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LandingPage from '../views/landingPage/LandingPage';
import NavBar from '../views/navBar/NavBar';

const MyRoutes = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes;