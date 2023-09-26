import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cl from './Navbar.module.css'


const Navbar = ({...props}) => {

    const { i18n, t } = useTranslation(["common", "headers"])

    useEffect(() =>
    {
        if (localStorage.getItem('i18nextLng')?.length > 2)
        {
            i18next.changeLanguage('en')
        }
    }, [])



    return (
        <nav className={cl.nav} {...props}>
            <ul className={cl.menu}>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link} href='https://alaqan.kz/'>{t("headers:overview")}</a>
                </li>
                <li className={cl.menu__item}>
                    <Link className={cl.menu__link} to={'/'}>{t("business")}</Link>
                </li>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link} href=''>{t("mektep")}</a>
                </li>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link} href=''>{t("pay")}</a>
                </li>
                <li className={cl.menu__item + ' ' + cl.current}>
                    <Link className={cl.menu__link + ' ' + cl.current} to={'/'}>{t("store")}</Link>
                </li>
                <li className={cl.menu__item}>
                    <a className={cl.menu__link} href=''>{t("headers:about")}</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar