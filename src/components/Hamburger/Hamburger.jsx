import React from 'react'

import cl from './Hamburger.module.css'

const Hamburger = ({isActive, ...props}) => {
    // const closeBtn =
    // {

    // }
    return (
        <button className={cl.hamburger} {...props}>
            <span className={isActive ? cl.hamburger__item + ' ' + cl.close_btn : cl.hamburger__item}></span>
            <span className={isActive ? cl.hamburger__item + ' ' + cl.close_btn : cl.hamburger__item}></span>
            <span className={isActive ? cl.hamburger__item + ' ' + cl.close_btn : cl.hamburger__item}></span>
        </button>
    )
}

export default Hamburger