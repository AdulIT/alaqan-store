import React from 'react'
import cl from './Language.module.css'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import arrowDownIcon from '../../assets/icons/arrowDown.svg'

import langs from '../../data/langs'

const Language = ({footer, mobile}) => {
    const { i18n } = useTranslation(["common"])
    const [isClicked, setIsClicked] = useState(false)
    const rootRef = useRef(null)

    let currentLang = 0

    // console.log(i18n.language);

    useEffect(() =>
    {
        const handleClick = (event) => {
            const { target } = event
            if (target instanceof Node && !rootRef.current?.contains(target)) {
            //   isOpen && onClose()
              setIsClicked(false)
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [isClicked])

    useEffect(() =>
    {
        switch(localStorage.getItem('i18nextLng'))
        {
            case 'en':
                currentLang = 0
                break;
            case 'kz':
                currentLang = 1
                break;
            case 'ru':
                currentLang = 2
                break;
        }
    }, [i18n.changeLanguage])

    function handleLanguageChange(langKey)
    {
        i18n.changeLanguage(langKey)
        currentLang = langKey
        console.log(currentLang);
        setIsClicked(false)
    }

    // console.log(currentLang);

    const langItem = langs.map((lang, i) =>
    {
        return (
            <li
                key={i}
                className={cl.langs_menu__item}
                // className={i === 0 ? cl.langs_menu__item + ' ' + cl.hidden : cl.langs_menu__item}
                value={lang.key}
                onClick={() => handleLanguageChange(lang.key)}
            >
                {/* {i === 0 ? currentLang = lang.language : ''} */}
                {lang.language}
            </li>
        )
    })

    // console.log(`current lang: ${currentLang}`);
    // console.log(langItem[currentLang].props.children);
    // console.log(langItem);

    const stylesForFooter =
    {
        top: footer ? '-150px' : '',
    }

    const stylesForMobile =
    {
        top: mobile ? '35px' : '',
    }

    const dropdownStyles = stylesForFooter || stylesForMobile

    // console.log(langItem[currentLang]);

    return (
        <div className={cl.lang_select} ref={rootRef}>
            <ul
                className={!isClicked ? cl.langs_menu : cl.langs_menu + ' ' + cl.active}
                value={localStorage.getItem('i18nextLng')}
                style={dropdownStyles}
            >
                {langItem}
            </ul>
            
            <div className={cl.lang_select__icon} onClick={() => setIsClicked(prev => !prev)}>
                <svg className={cl.lang_globeIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#1D1D1F" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M3.51562 9H20.4844" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.51562 15H20.4844" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20.7562C14.0711 20.7562 15.75 16.8358 15.75 11.9999C15.75 7.16396 14.0711 3.24365 12 3.24365C9.92893 3.24365 8.25 7.16396 8.25 11.9999C8.25 16.8358 9.92893 20.7562 12 20.7562Z" stroke="#1D1D1F" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
                    { footer ? langItem[currentLang].props.children : '' }
                <img className={!isClicked ? cl.lang_arrowDownIcon : cl.lang_arrowDownIcon + ' ' + cl.rotateArrow} src={arrowDownIcon} alt="globe" />
            </div>
        </div>
    )
}

export default Language