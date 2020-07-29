import React from 'react';

import TemplateBase from '../../components/TemplateBase';
import { Link } from 'react-router-dom';

const RegisterCategory = () => {
    return(
        <TemplateBase>
            <h1>Cadastro de Categoria</h1>

                <form>
                    <label>
                        Nome da Categoria:
                        <input type="text"/>
                    </label>

                    <button>
                        Cadastrar
                    </button>
                </form>

            <Link to="/">
                Ir para home
            </Link>
        </TemplateBase>
    )
}

export default RegisterCategory;