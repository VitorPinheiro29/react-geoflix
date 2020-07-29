import React from 'react';

import TemplateBase from '../../components/TemplateBase';
import { Link } from 'react-router-dom';

const RegisterVideo = () => {
    return(
        <TemplateBase>
            <h1>Cadastro de Vídeos</h1>

            <Link to="/register/category">
                Cadastrar Categoria
            </Link>
        </TemplateBase>
    )
}

export default RegisterVideo;