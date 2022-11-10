import React from 'react'
import './navBar.scss';

const NavBar = () => {
    return (
        <div className='navBar_Contenedor'>
            <i className="fa-solid fa-film"></i>
            <a className='enlace-titulo' href="/"><h1 className='NavBar_titulo'>Películas</h1></a>
        </div>
    )
}

export default NavBar