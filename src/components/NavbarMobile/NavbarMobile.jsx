import React from 'react'
import Language from '../Language/Language'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import cl from './NavbarMobile.module.css'

const NavbarMobile = ({hamburgerState}) => {
    const { t } = useTranslation(["common", "headers"])

    const menuStyles =
    {
        left: hamburgerState ? '0' : '-100%',
    }
    
    // const menuStyles =
    // {
    //     top: hamburgerState ? '73px' : '-100%',
    // }

    return (
        <nav className={cl.nav} style={menuStyles}>
            <ul className={cl.menu} style={menuStyles}>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link} href='https://alaqan.kz/'>{t("headers:overview")}</a>
                </li>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link} href='https://alaqan.kz/mektep'>{t("mektep")}</a>
                </li>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link} href='https://alaqan.kz/pay'>{t("pay")}</a>
                </li>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link + ' ' + cl.active} href='/'>{t("store")}</a>
                </li>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link} href='https://alaqan.kz/about'>{t("headers:about")}</a>
                </li>
                <Language mobile={true} />
            </ul>
        </nav>
    )
}

export default NavbarMobile