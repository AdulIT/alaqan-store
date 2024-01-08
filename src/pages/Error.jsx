import React from 'react'
import errorImg from '../assets/img/404/404.jpg'

const Error = () => {
    return (
        <div>
            <img
                src={errorImg}
                alt="error"
                loading='lazy'
            />
            <p>Страница не найдена :(</p>
        </div>
    );
};

export default Error;