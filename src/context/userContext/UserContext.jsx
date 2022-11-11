import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = {
    id: '1',
    name: 'Persona X',
    favouriteMovies: [663712, 675054, 49046]
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser);

    const login = () => {
        setUser(initialUser);
    }

    const logout = () => {
        setUser(null);
    }

    const toggleFavouriteMoviesToUser = (movieId) => {

        const isFavouriteMovie = user.favouriteMovies.includes(movieId);

        const favouriteMovies = isFavouriteMovie
            ? user.favouriteMovies.filter(favMovId => favMovId !== movieId)
            : [...user.favouriteMovies, movieId]

        setUser({
            ...user,
            favouriteMovies
        })
    }

    const data = {user, login, logout, toggleFavouriteMoviesToUser}
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;