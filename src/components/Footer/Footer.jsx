import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import cl from './Footer.module.css'

import alaqanLogo from '/alaqan.svg'
import alaqanText from '../../assets/icons/alaqan-text.svg'
import instaLogo from '../../assets/icons/social/instagram.svg'
import youtubeLogo from '../../assets/icons/social/youtube.svg'
import fbLogo from '../../assets/icons/social/fb.svg'
import inLogo from '../../assets/icons/social/in.svg'
import Language from '../Language/Language'

const Footer = () => {
    const { t } = useTranslation(["footer", "common"])

    const containerStyles =
    {
      backgroundColor: '#fff'
    }

    return (
        <footer className={cl.footer}>
            {/* <div className="container"> */}
                <div className={cl.footer__wrapper}>
                    <div className={cl.footer__alaqan}>
                        <div className={cl.footer__logo}>
                            <img className={cl.footer__alaqan_img} src={alaqanLogo} alt="alaqan-logo" />
                            <img className={cl.footer__alaqan_img} src={alaqanText} alt="alaqan-logo-text" />
                        </div>

                        <p className={cl.footer__alaqan_info}> {t("footerAlaqanInfo")} </p>

                        <div className={cl.footer__alaqan_social}>
                            <a href="#">
                                <img className={cl.footer__alaqan_social__img} src={instaLogo} alt="instagram-logo" />
                            </a>
                            <a href="#">
                                <img className={cl.footer__alaqan_social__img} src={youtubeLogo} alt="youtube-logo" />
                            </a>
                            <a href="#">
                                <img className={cl.footer__alaqan_social__img} src={fbLogo} alt="facebook-logo" />
                            </a>
                            <a href="#">
                                <img className={cl.footer__alaqan_social__img} src={inLogo} alt="linkedin-logo" />
                            </a>
                        </div>
                    </div>

                    <div className={cl.footer__nav}>
                        <div className={cl.footer__nav_container}>
                            <p className={cl.footer__nav_title}> {t("footerNavCompany")} </p>
                            <ul className={cl.footer__nav_menu}>
                                <li className={cl.footer__nav_menu__item}> <a href="https://alaqan.kz/about">{t("footerNavAbout")}</a> </li>
                                <li className={cl.footer__nav_menu__item}> <a href="#contactUs">{t("footerNavJobs")}</a> </li>
                            </ul>
                        </div>

                        <div className={cl.footer__nav_container}>
                            <p className={cl.footer__nav_title}> {t("footerNavProducts")} </p>
                            <ul className={cl.footer__nav_menu}>
                                <li className={cl.footer__nav_menu__item}> <a href="#">{t("common:business")}</a> </li>
                                <li className={cl.footer__nav_menu__item}> <a href="#">{t("common:mektep")}</a> </li>
                                <li className={cl.footer__nav_menu__item}> <a href="#">{t("common:pay")}</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cl.line}></div>

                <div className={cl.footer__footer}>
                    <p className={cl.footer__footer_text + ' ' + cl.rights}> {t("footerCopyright")} </p>
                    <Link className={cl.footer__footer_text} to={'https://alaqan.kz/docs/public-contract'} target={'_blank'}> {t("footerPublicOffer")} </Link>
                    <Link className={cl.footer__footer_text} to={'https://alaqan.kz/docs/privacy-policy'} target={'_blank'}> {t("footerPrivacyPolicy")} </Link>
                    <Language footer={true}></Language>
                </div>
            {/* </div> */}
        </footer>
    )
}

export default Footer