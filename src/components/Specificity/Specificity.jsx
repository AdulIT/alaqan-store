import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

import Button from '../UI/button/Button'
import cl from './Specificity.module.css'

import '../Card/flip-transition.css'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import turnstileImg from '../../assets/img/productFeatures/turnstile.png'
import closeIcon from '../../assets/icons/productFeatures/closeGreen.svg'

const Specificity = () => {
    const [showFront, setShowFront] = useState(true)

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

    return (
        <div className={cl.specificity}>
            <h3 className={cl.title}> Особенности нашей <br /> системы. </h3>

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
                    <div className={cl.front}>
                        <img src={turnstileImg} alt="turnstile" />
                        <div>
                            <p className={cl.text}>
                                Как это <br /> работает?
                            </p>
                            <Button styles={btnStyles}>
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