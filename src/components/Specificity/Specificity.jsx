import { useState } from 'react'
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

    const {isMediumTablet} = useMatchMedia();

    const turnstileImgs = {
        '/product/1': {
            img: ts2000,
            style: {}
        },
        '/product/2': {
            img: ts1000,
            style: {
                padding: '0 100px 40px 0',
                borderRadius: '30px 0 0 0'
            }
        },
        '/product/3': {
            img: fbl700,
            style: {
                padding: '0 100px 40px 0',
                borderRadius: '30px 0 0 0'
            }
        },
        '/product/10': {
            img: terminalT1,
            style: {
                padding: '0 100px 70px 0',
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
        borderRadius: '30px 0 0 0',
        width: isMediumTablet ? '60%' : 'auto', 
    }

    return (
        <div className={cl.specificity}>
            <h3 className={cl.title}> Особенности</h3>

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
                        <img style={imgStyles} src={turnstileImgs[location.pathname]?.img} alt="turnstile" />
                        <div>
                            <p className={cl.text}>
                                Как это <br /> работает?
                            </p>
                            <Button styles={btnStyles} className={cl.front_btn__learn_more}>
                                Узнать больше
                                <img src={arrowRightIcon} alt="arrow-right-icon" />
                            </Button>
                        </div>
                    </div>

                    <div className={cl.back}>
                        <div className={cl.back_info}>
                            <h3 className={cl.back_title}> Сканирование </h3>
                            <p className={cl.back_text}>
                                Сканируйте уникальный
                                рисунок вен ладони.
                            </p>
                        </div>

                        <div className={cl.back_info}>
                            <h3 className={cl.back_title}> Шифрование </h3>
                            <p className={cl.back_text}>
                                Рисунок вен ладони зашифрован в цифровой код.
                            </p>
                        </div>

                        <div className={cl.back_info}>
                            <h3 className={cl.back_title}> Поиск </h3>
                            <p className={cl.back_text}>
                                Код сравнивается в базе зарегистрированных пользователей.
                            </p>
                        </div>

                        <div className={cl.back_info}>
                            <h3 className={cl.back_title}> Доступ </h3>
                            <p className={cl.back_text}>
                                Уникальный код найден – доступ подтвержден.
                            </p>
                        </div>
                        <img className={cl.close_btn} src={closeIcon} alt="close-green-icon" />
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Specificity;