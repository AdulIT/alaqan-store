import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../UI/button/Button'
import cl from './Tabs.module.css'

import historyImg from '../../assets/img/hrApp/history.jpg'
import historyImgEN from '../../assets/img/hrApp/history-en.jpg'
import usersImg from '../../assets/img/hrApp/users.jpg'
import usersImgEN from '../../assets/img/hrApp/users-en.jpg'
import schedulesImg from '../../assets/img/hrApp/schedules.jpg'
import schedulesImgEN from '../../assets/img/hrApp/schedules-en.jpg'

import tripleStickIcon from '../../assets/icons/tripleSticks.svg'
import curlyArrowIcon from '../../assets/icons/curlyArrow.svg'

const Tabs = () => {
    const { t } = useTranslation(["hrApp"])
    const [isActive, setIsActive] = useState(false)
    const [toggleState, setToggleState] = useState(1)

    const btnStyles = 
    {
        padding: '15px 30px 17px 30px',
        borderRadius: '100px',
        backgroundColor: '#FFF',
        color: isActive ? '#FFF' : '#000',
        border: '1px solid #1D1D1F',
    }

    const btnStylesActive =
    {
        padding: '15px 30px 17px 30px',
        borderRadius: '100px',
        backgroundColor: '#000',
        color: '#FFF',
        border: 'none',
    }

    const toggleTab = (index) =>
    {
        setToggleState(index)
    }

    const images = [
        {
            en: historyImgEN,
            ru: historyImg,
            kz: historyImg,
        },
        {
            en: usersImgEN,
            ru: usersImg,
            kz: usersImg,
        },
        {
            en: schedulesImgEN,
            ru: schedulesImg,
            kz: schedulesImg,
        },
    ]

    return (
        <div className={cl.tabs__container}>
            <img className={cl.tabs_decorative_up} src={tripleStickIcon} alt="triple-stick" loading='lazy' />
            <div className={cl.tabs__content}>
                <img
                    className={toggleState === 1 ? cl.tabs__content_img + ' ' + cl.show : cl.tabs__content_img + ' ' + cl.hide}
                    src={images[0][localStorage.getItem('i18nextLng')]}
                    alt="history-page"
                    loading='lazy'
                />
                <img
                    className={toggleState === 2 ? cl.tabs__content_img + ' ' + cl.show : cl.tabs__content_img + ' ' + cl.hide}
                    src={images[1][localStorage.getItem('i18nextLng')]}
                    alt="users-page"
                    loading='lazy'
                />
                <img
                    className={toggleState === 3 ? cl.tabs__content_img + ' ' + cl.show : cl.tabs__content_img + ' ' + cl.hide}
                    src={images[2][localStorage.getItem('i18nextLng')]}
                    alt="schedules-page"
                    loading='lazy'
                />
            </div>
            <img
                className={cl.tabs_decorative_down}
                src={curlyArrowIcon}
                alt="curly-arrow" 
                loading='lazy'
            />

            <div className={cl.tabs__header}>
                <Button
                    styles={toggleState === 1 ? btnStylesActive : btnStyles}
                    onClick={() => toggleTab(1)}
                    className={cl.btn__mobile}
                >
                    {t("hrappHistoryBtn")}
                </Button>
                <Button
                    styles={toggleState === 2 ? btnStylesActive : btnStyles}
                    onClick={() => toggleTab(2)}
                    className={cl.btn__mobile}
                >
                    {t("hrappUsersBtn")}
                </Button>
                <Button
                    styles={toggleState === 3 ? btnStylesActive : btnStyles}
                    onClick={() => toggleTab(3)}
                    className={cl.btn__mobile}
                >
                    {t("hrappSchedulesBtn")}
                </Button>
            </div>
        </div>
    )
}

export default Tabs