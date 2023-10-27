import React from 'react'
import cl from './MobileApp.module.css'
import { useTranslation } from 'react-i18next'

import iphoneMockup from '../../assets/img/mobileApp/iPhone-ru.png'
import mobileiPhoneMockup from '../../assets/img/mobileApp/mobileiPhone.png'

const MobileApp = () => {
    const { t } = useTranslation("mobileApp")

    return (
        <section className={cl.mobileapp} id="mobileapp">
            <img className={cl.mobileapp__img} src={iphoneMockup} alt="iphone-mockup" />
            <img className={cl.mobileapp__img_mobile} src={mobileiPhoneMockup} alt="iphone-mockup" />
            <div className={cl.mobileapp__text}>
                <h3 className={cl.mobileapp__text_title}>
                    {t("mobileappTitle")}
                </h3>
                <p className={cl.mobileapp__text_descr}>
                    {t("mobileappText")}
                </p>
            </div>
        </section>
    )
}

export default MobileApp