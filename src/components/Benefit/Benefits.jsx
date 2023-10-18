import React from 'react'
import cl from './Benefits.module.css'

import benefits from '../../data/benefits'
import BenefitItem from '../BenefitItem/BenefitItem'
import { useTranslation } from 'react-i18next'

import encryptionIcon from '../../assets/icons/products/shield.svg'
import speedIcon from '../../assets/icons/products/timer.svg'
import smileyIcon from '../../assets/icons/products/smiley.svg'

const Benefits = () => {
    const { t } = useTranslation(["benefits"])
    // const benefitItem = benefits.map((item, i) =>
    //     {
    //         return <BenefitItem key={i} imgSrc={item.img} title={item.title} />
    //     }
    // )

    return (
        <section className={cl.benefits}>
            <div className={cl.benefit__item}>
                <img className={cl.benefit__item_img} src={encryptionIcon} alt="" />
                <p className={cl.benefit__item_title}> Корпус из стали SUS </p>
            </div>
            <div className={cl.benefit__item}>
                <img className={cl.benefit__item_img} src={speedIcon} alt="" />
                <p className={cl.benefit__item_title + ' ' + cl.benefit__item_title_2}> Скорость прохода 30 человек / минуту </p>
            </div>
            <div className={cl.benefit__item}>
                <img className={cl.benefit__item_img} src={smileyIcon} alt="" />
                <p className={cl.benefit__item_title}> Система “анти-паника” </p>
            </div>
        </section>
    )
}

export default Benefits