import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {changeHeaderHeight} from '../../store/headerSlice';
import { useMatchMedia } from '../../hooks/useMatchMedia';

import Navbar from '../Navbar/Navbar';
import Language from '../Language/Language';
import Button from '../UI/button/Button';
import Hamburger from '../Hamburger/Hamburger';
import NavbarMobile from '../NavbarMobile/NavbarMobile';

import cl from './Header.module.css';

import alaqanLogo from '/alaqan.svg';
import paperPlaneTilt from '../../assets/icons/paperPlaneTilt.svg';

const Header = ({...props}) => {
    const { t } = useTranslation(["headers"])
    const [hamburgerActive, setHamburgerActive] = useState(false)
    const {isMediumTablet} = useMatchMedia()
    const headerRef = useRef(null)

    const dispatch = useDispatch()

    useEffect(() =>
    {
        const computedHeaderHeight = window.getComputedStyle(headerRef.current).getPropertyValue('height')
        dispatch(changeHeaderHeight({
            computedHeaderHeight
        }))
    }, [])


    useEffect(() =>
    {
        const body = document.body
        if (hamburgerActive)
        {
            body.style.overflow = 'hidden'
        }
        else
        {
            body.style.overflow = 'auto'
        }
    }, [hamburgerActive])

    function handleClick()
    {
        setHamburgerActive(prev => !prev)
    }

    const btnStyles = 
    {
        padding: isMediumTablet ? '11px 15px' : '11px 20px',
        borderRadius: '16px',
        backgroundColor: '#007AFF',
        color: '#FFFFFF',
    }

    const btnStylesMobile = 
    {
        padding: '13px',
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        backgroundColor: '#007AFF',
    }

    return (
        <header className={cl.header} ref={headerRef} {...props}>
                <div className={cl.header__left}>
                    <img className={cl.header_logo} src={alaqanLogo} alt="alaqan-logo" />
                    <Navbar className={cl.header__nav} />
                </div>

                <div className={cl.header__left_mobile}>
                    <Hamburger className={cl.header__hamburger} onClick={handleClick} isActive={hamburgerActive} />
                    <img className={cl.header_logo} src={alaqanLogo} alt="alaqan-logo" />
                    <HashLink to={'#contactus'}>
                        <Button styles={btnStylesMobile} className={cl.header__btn_mobile}>
                            <img src={paperPlaneTilt} alt="paper-plane-tilt" />
                        </Button>
                    </HashLink>
                    <NavbarMobile hamburgerState={hamburgerActive} />
                </div>
                
                <div className={cl.lang}>
                    <Language />
                    <HashLink to={'#contactus'}>
                        <Button className={cl.header__btn} styles={btnStyles}>{t("getStarted")}</Button>
                    </HashLink>
                </div>
        </header>
    );
};

export default Header;