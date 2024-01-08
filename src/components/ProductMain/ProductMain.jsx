import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import { useMatchMedia } from '../../hooks/useMatchMedia'

import cl from './ProductMain.module.css'

import ts2000 from '../../assets/img/products/turnstile-ts2000.svg'
import ts1000 from '../../assets/img/products/turnstile-ts1000.svg'
import fbl700 from '../../assets/img/products/turnstile-fbl700.svg'
import terminalT1 from '../../assets/img/products/alaqan-terminalT1.svg'

const ProductMain = () => {
    const { t } = useTranslation(["products"])
    const location = useLocation()

    const {isMobile, isSmallMobile, isMicroMobile} = useMatchMedia();

    const turnstileNames = {
        '/product/1': {
            text: isSmallMobile ? t(`all.${0}.mainTextSmallMobile`)
                : t(`all.${0}.mainText`),
            title: isSmallMobile ? t(`all.${0}.mainTitleSmallMobile`) : t(`all.${0}.mainTitle`),
            img: ts2000,
        },
        '/product/2': {
            text: isMicroMobile ? t(`all.${1}.mainTextMicroMobile`)
                : isSmallMobile ? t(`all.${1}.mainTextSmallMobile`)
                : t(`all.${1}.mainText`),
            title: isMicroMobile ? t(`all.${1}.mainTitleMicroMobile`)
                 : isSmallMobile ? t(`all.${1}.mainTitleSmallMobile`) : t(`all.${1}.mainTitle`),
            img: ts1000,
        },
        '/product/3': {
            text: isMicroMobile ? t(`all.${2}.mainTextMicroMobile`)
                : isSmallMobile ? t(`all.${2}.mainTextSmallMobile`)
                : t(`all.${2}.mainText`),
            title: isMicroMobile ? t(`all.${2}.mainTitleMicroMobile`)
                : isMobile ? t(`all.${2}.mainTitleMobile`) : t(`all.${2}.mainTitle`),
            img: fbl700,
        },
        '/product/10': {
            text: isMicroMobile ? t(`all.${9}.mainTextMicroMobile`)
            : t(`all.${9}.mainText`),
            title: isSmallMobile ? t(`all.${9}.mainTitleSmallMobile`) : t(`all.${9}.mainTitle`),
            img: terminalT1,
        },
    }

    return (
        <section className={cl.main}>
            <h1 className={cl.main_product__title}>{turnstileNames[location.pathname]?.title}</h1>
            <p className={cl.main_product__descr}>
                {turnstileNames[location.pathname]?.text}
            </p>

            <img
                src={turnstileNames[location.pathname]?.img}
                alt="turnstileImg"
                loading='lazy'
            />
        </section>
    );
};

export default ProductMain;