import Language from '../Language/Language'
// import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';


import cl from './NavbarMobile.module.css'

/* eslint react/prop-types: 0 */
const NavbarMobile = ({hamburgerState}) => {
    const { t } = useTranslation(["common", "headers"])
    const headerHeight = useSelector(state => state.headerHeight.headerHeight)

    const menuStyles =
    {
        top: headerHeight,
        left: hamburgerState ? '0' : '-100%',
        display: hamburgerState ? 'flex' : 'none',
        minHeight: `calc(100vh - ${headerHeight})`,
    }

    return (
        <nav className={cl.nav} style={menuStyles}>
            <ul className={cl.menu}>
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