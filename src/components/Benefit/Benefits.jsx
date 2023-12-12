import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import cl from './Benefits.module.css'

// import benefits from '../../data/benefits'
import BenefitItem from '../BenefitItem/BenefitItem'

import encryptionIcon from '../../assets/icons/products/shield.svg'
import speedIcon from '../../assets/icons/products/timer.svg'
import smileyIcon from '../../assets/icons/products/smiley.svg'

import shieldPlusIcon from '../../assets/icons/products/shieldPlus.svg'
import crosshairIcon from '../../assets/icons/products/crosshair.svg'
import passwordIcon from '../../assets/icons/products/password.svg'

const Benefits = () => {
    // const { t } = useTranslation(["benefits"])
    const location = useLocation()
    // const benefitItem = benefits.map((item, i) =>
    //     {
    //         return <BenefitItem key={i} imgSrc={item.img} title={item.title} />
    //     }
    // )

    return (
        <section className={cl.benefits}>
            {location.pathname === '/product/10'
                ?
                <>
                    <div className={cl.benefit__item}>
                        <img className={cl.benefit__item_img} src={shieldPlusIcon} alt="" />
                        <p className={cl.benefit__item_title}> Бесконтактное сканирование </p>
                    </div>
                    <div className={cl.benefit__item}>
                        <img className={cl.benefit__item_img} src={speedIcon} alt="" />
                        <p className={cl.benefit__item_title + ' ' + cl.benefit__item_title_2}> Скорость 0.3 сек </p>
                    </div>
                    <div className={cl.benefit__item}>
                        <img className={cl.benefit__item_img} src={crosshairIcon} alt="" />
                        <p className={cl.benefit__item_title}> Точность 99.9% </p>
                    </div>
                    <div className={cl.benefit__item}>
                        <img className={cl.benefit__item_img} src={passwordIcon} alt="" />
                        <p className={cl.benefit__item_title}> Шифрование </p>
                    </div>
                </>
                :
                <>
                    <div className={cl.benefit__item}>
                        <img className={cl.benefit__item_img} src={encryptionIcon} alt="" />
                        <p className={cl.benefit__item_title}> Корпус из <br /> стали SUS </p>
                    </div>
                    <div className={cl.benefit__item}>
                        <img className={cl.benefit__item_img} src={speedIcon} alt="" />
                        <p className={cl.benefit__item_title + ' ' + cl.benefit__item_title_2}> Скорость прохода <br /> 30 человек / минуту </p>
                    </div>
                    <div className={cl.benefit__item}>
                        <img className={cl.benefit__item_img} src={smileyIcon} alt="" />
                        <p className={cl.benefit__item_title}> Система <br /> “анти-паника” </p>
                    </div>
                </>
            }
        </section>
    )
}

export default Benefits