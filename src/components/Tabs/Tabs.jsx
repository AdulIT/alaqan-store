import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../UI/button/Button'
import cl from './Tabs.module.css'

import historyImg from '../../assets/img/hrApp/history.jpg'
import usersImg from '../../assets/img/hrApp/users.jpg'
import schedulesImg from '../../assets/img/hrApp/schedules.jpg'
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

    return (
        <div className={cl.tabs__container}>
            <img className={cl.tabs_decorative_up} src={tripleStickIcon} alt="triple-stick" />
            <div className={cl.tabs__content}>
                <img
                    className={toggleState === 1 ? cl.tabs__content_img + ' ' + cl.show : cl.tabs__content_img + ' ' + cl.hide}
                    src={historyImg}
                    alt="history-page"
                />
                <img
                    className={toggleState === 2 ? cl.tabs__content_img + ' ' + cl.show : cl.tabs__content_img + ' ' + cl.hide}
                    src={usersImg}
                    alt="users-page"
                />
                <img
                    className={toggleState === 3 ? cl.tabs__content_img + ' ' + cl.show : cl.tabs__content_img + ' ' + cl.hide}
                    src={schedulesImg}
                    alt="schedules-page"
                />
            </div>
            <img className={cl.tabs_decorative_down} src={curlyArrowIcon} alt="curly-arrow" />

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