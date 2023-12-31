import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import Button from '../UI/button/Button'

import cl from './Specificity.module.css'
import '../Card/flip-transition.css'

import { useMatchMedia } from '../../hooks/useMatchMedia'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import ts2000 from '../../assets/img/specificity/ts2000pro.png'
import ts1000 from '../../assets/img/specificity/ts1000.svg'
import fbl700 from '../../assets/img/specificity/fbl700.svg'
import terminalT1 from '../../assets/img/specificity/terminalT1.svg'
import closeIcon from '../../assets/icons/productFeatures/closeGreen.svg'

const Specificity = () => {
    const [showFront, setShowFront] = useState(true)
    const location = useLocation()
    const { t } = useTranslation(["specificity"]);

    const {isMobile, isSmallMobile, isMicroMobile} = useMatchMedia();

    const turnstileImgs = {
        '/product/1': {
            img: ts2000,
            style: {}
        },
        '/product/2': {
            img: ts1000,
            style: {
                padding: isSmallMobile ? '0' : isMobile ? '0 65px 40px 0' : '0 100px 40px 0',
                borderRadius: '30px 0 0 0'
            }
        },
        '/product/3': {
            img: fbl700,
            style: {
                padding: isMicroMobile ? '0 5px 40px 0'
                         : isSmallMobile ? '0 1px'
                         : isMobile ? '0 64px 40px 0'
                         : '0 100px 40px 0',
                borderRadius: '30px 0 0 0'
            }
        },
        '/product/10': {
            img: terminalT1,
            style: {
                padding: isMicroMobile ? '0 5px 40px 0'
                         : isSmallMobile ? '0 1px'
                         : isMobile ? '0 64px 40px 0'
                         : '0 100px 70px 0',
                borderRadius: '30px 0 0 0'
            }
        },
    }

    const btnStyles =
    {
        padding: '10px 24px 12px 24px',
        borderRadius: '20px',
        backgroundColor: '#1ED768',
        color: '#FFFFFF',
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
        gap: '10px',
        letterSpacing: '-0.72px',
    }

    const imgStyles =
    {
        borderRadius: isMicroMobile ? '20px' : isSmallMobile ? '20px 0 30px' : '30px 0 0 0',
        width: isMicroMobile ? '250px' : isMobile ? '336px' : '100%',
        height: isMicroMobile ? '290px' : isMobile ? '390px' : '100%',
        marginLeft: isMicroMobile ? '-9px' : isSmallMobile ? '73px' : '0',
        aspectRatio: isMobile ? '2 / 3' : '0.5',
    }

    return (
        <div className={cl.specificity}>
            <h3 className={cl.title}>{t("title")}</h3>

            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <div
                    className={cl.wrapper}
                    onClick={() => {
                        setShowFront((prev) => !prev)
                    }}
                >
                    <div className={cl.front} style={turnstileImgs[location.pathname]?.style}>
                        <img
                            style={imgStyles}
                            src={turnstileImgs[location.pathname]?.img}
                            alt="turnstile"
                            loading='lazy'
                        />
                        <div>
                            <p className={cl.text}>
                                {t("cardTitle")}
                            </p>
                            <Button styles={btnStyles} className={cl.front_btn__learn_more}>
                                {t("cardBtn")}
                                <img
                                    src={arrowRightIcon}
                                    alt="arrow-right-icon"
                                    loading='lazy'
                                />
                            </Button>
                        </div>
                    </div>

                    <div className={cl.back}>
                        <div className={cl.back_info}>
                            <h3 className={cl.back_title}> {t("backTitle1")} </h3>
                            <p className={cl.back_text}>
                                {t("backText1")}
                            </p>
                        </div>

                        <div className={cl.back_info}>
                            <h3 className={cl.back_title}> {t("backTitle2")} </h3>
                            <p className={cl.back_text}>
                                {t("backText2")}
                            </p>
                        </div>

                        <div className={cl.back_info}>
                            <h3 className={cl.back_title}> {t("backTitle3")} </h3>
                            <p className={cl.back_text}>
                                {t("backText3")}
                            </p>
                        </div>

                        <div className={cl.back_info}>
                            <h3 className={cl.back_title}> {t("backTitle4")} </h3>
                            <p className={cl.back_text}>
                                {t("backText4")}
                            </p>
                        </div>
                        <img
                            className={cl.close_btn}
                            src={closeIcon}
                            alt="close-green-icon"
                            loading='lazy'
                        />
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Specificity;