import React from 'react';

import './styles.css';

import logo from '../../assets/logo.png'

import Button from '../Button'

const Menu = () => {
    return(
        <nav className="menu-container">
            <a href="/">
                <img src={logo} className="logo" alt="Logo da Geoflix"  />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;