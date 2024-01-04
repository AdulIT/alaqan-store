import cl from './MobileApp.module.css'
import { useTranslation } from 'react-i18next'

// import Button from '../UI/button/Button'
// import { useMatchMedia } from '../../hooks/useMatchMedia'

import iphoneMockupRU from '../../assets/img/mobileApp/iPhone-ru.png'
import iphoneMockupEN from '../../assets/img/mobileApp/iPhone.png'
import mobileiPhoneMockupRU from '../../assets/img/mobileApp/mobileiPhone-ru.png'
import mobileiPhoneMockupEN from '../../assets/img/mobileApp/mobileiPhone.png'

const MobileApp = () => {
    const { t } = useTranslation("mobileApp")

    console.log(localStorage.getItem('i18nextLng'));

    // const {isMobile} = useMatchMedia();

    // const btnStyles =
    // {
    //     padding: isMobile ? '12px 20px 13px' : '14px 20px 15px',
    //     borderRadius: '38px',
    //     border: isMobile ? '3px solid #007AFF' : '4px solid #007AFF',
    //     color: '#007AFF',
    //     fontSize: isMobile ? '2rem' : '2.4rem',
    //     fontWeight: 700,
    //     cursor: 'pointer',
    //     backgroundColor: 'transparent',
    // }

    const images = {
        en: iphoneMockupEN,
        enMobile: mobileiPhoneMockupEN,
        ru: iphoneMockupRU,
        ruMobile: mobileiPhoneMockupRU
    }

    return (
        <section className={cl.mobileapp} id="mobileapp">
            <img className={cl.mobileapp__img} src={images[localStorage.getItem('i18nextLng')]} alt="iphone-mockup" />
            <img className={cl.mobileapp__img_mobile} src={images[localStorage.getItem('i18nextLng')+'Mobile']} alt="iphone-mockup" />
            <div className={cl.mobileapp__text}>
                <h3 className={cl.mobileapp__text_title}>
                    {t("mobileappTitle")}
                </h3>
                <p className={cl.mobileapp__text_descr}>
                    {t("mobileappText")}
                </p>
                {/* <Button styles={btnStyles} className={cl.btn_soon}>
                    {t("mobileappText")}
                </Button> */}
            </div>
        </section>
    )
}

export default MobileApp