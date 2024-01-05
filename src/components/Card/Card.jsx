import Button from '../UI/button/Button';
import cl from './Card.module.css'
import './flip-transition.css'

import closeSignIcon from '../../assets/icons/productFeatures/closeBlack.svg'
import plusSignIcon from '../../assets/icons/productFeatures/plusSignIconWhite.svg'
import plusSignIconBlack from '../../assets/icons/productFeatures/plusSignIconBlack.svg'

const Card = ({frontTitle, backTitle, backText, onClick, children, ...props}) => {
    const btnStyles =
    {
        padding: 0,
        backgroundColor: 'transparent'
    }

    return (
        <div className={cl.card} onClick={onClick}>
            <div className={cl.front_card}>
                <h3 className={cl.front_title}> {frontTitle} </h3>
                    {children}
                <Button styles={btnStyles}>
                    <img className={cl.btn_icon} src={plusSignIcon} alt="plus-sign-icon" />
                </Button>
            </div>

            <div className={cl.back_card}>
                <h3 className={cl.back_title}> {backTitle} </h3>
                <p className={cl.back_text}>
                    { backText }
                </p>
                <img className={cl.back__btn_icon} src={closeSignIcon} alt="close-sign-icon" />
            </div>
        </div>
    );
};

const CardHorizontal = ({frontTitle, backTitle, backText, onClick, children, ...props}) => {
    const btnStyles =
    {
        padding: 0,
        backgroundColor: 'transparent'
    }

    return (
        <div className={cl.card} onClick={onClick}>
            <div className={cl.front_card}>
                <h3 className={cl.front_title}> {frontTitle} </h3>
                    {children}
                <Button styles={btnStyles}>
                    {/* <img className={cl.btn_icon} src={plusSignIcon} alt="plus-sign-icon" /> */}
                    <img className={cl.btn_icon} src={plusSignIconBlack} alt="plus-sign-icon" />
                </Button>
            </div>

            <div className={cl.back_card_h}>
                <h3 className={cl.back_title}> {backTitle} </h3>
                <p className={cl.back_text}>
                    { backText }
                </p>
                <img className={cl.back__btn_icon} src={closeSignIcon} alt="close-sign-icon" />
            </div>
        </div>
    );
};

export {Card, CardHorizontal};