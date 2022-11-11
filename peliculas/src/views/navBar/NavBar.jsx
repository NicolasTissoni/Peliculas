import React, { useContext } from 'react'
import './navBar.scss';
import UserContext from '../../context/userContext/UserContext';

const NavBar = () => {
    const { user, login, logout } = useContext(UserContext);

    return (
        <div className='navBar_Contenedor'>
            <div className='navBar_titulo_icon'>
                <a href="/"><h1 className='NavBar_titulo'>Películas</h1></a>
                <i className="fa-solid fa-film"></i>
            </div>
            <div className='navBar_user'>
                <h2>{ user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
                {user
                    ? 
                        <button onClick={logout}>Cerrar Sesion</button> 
                    : 
                        <button onClick={login}>Iniciar Sesion</button>
                    }
            </div>
        </div>
    )
}

export default NavBar