import React from 'react';

const ButtonLink = (props) => {

    return(
        <a className={props.className} href={props.href}>
            {props.children} {/**props é incrível. Vai pegar a className de lá, href, etc */}
        </a>
    )
}

export default ButtonLink;