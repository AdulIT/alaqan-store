import React from 'react'

import Button from '../UI/button/Button'
import cl from './Specificity.module.css'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import turnstileImg from '../../assets/img/productFeatures/turnstile.png'

const Specificity = () => {
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

            <div className={cl.wrapper}>
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
        </div>
    );
};

export default Specificity;