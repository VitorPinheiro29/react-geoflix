import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png'

import Button from '../Button'

const Menu = () => {
    return(
        <nav className="menu-container">
            <Link to="/">
                <img src={logo} className="logo" alt="Logo da Geoflix"  />
            </Link>

            <Button as={Link} className="ButtonLink" to="/register/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;