import cl from './MobileApp.module.css'
import { useTranslation } from 'react-i18next'

import Button from '../UI/button/Button'

import iphoneMockup from '../../assets/img/mobileApp/iPhone-ru.png'
import mobileiPhoneMockup from '../../assets/img/mobileApp/mobileiPhone.png'

const MobileApp = () => {
    const { t } = useTranslation("mobileApp")

    const btnStyles =
    {
        padding: '14px 20px 15px',
        borderRadius: '38px',
        border: '4px solid #007AFF',
        color: '#007AFF',
        fontSize: '2.4rem',
        fontWeight: 700,
        cursor: 'pointer',
    }

    return (
        <section className={cl.mobileapp} id="mobileapp">
            <img className={cl.mobileapp__img} src={iphoneMockup} alt="iphone-mockup" />
            <img className={cl.mobileapp__img_mobile} src={mobileiPhoneMockup} alt="iphone-mockup" />
            <div className={cl.mobileapp__text}>
                <h3 className={cl.mobileapp__text_title}>
                    {t("mobileappTitle")}
                </h3>
                {/* <p className={cl.mobileapp__text_descr}>
                    {t("mobileappText")}
                </p> */}
                <Button styles={btnStyles} className={cl.btn_soon}>
                    {t("mobileappText")}
                </Button>
            </div>
        </section>
    )
}

export default MobileApp