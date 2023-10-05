import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import cl from './ProductItem.module.css'

import Button from '../UI/button/Button'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import encryptionIcon from '../../assets/icons/products/shield-stroke.svg'
import speedIcon from '../../assets/icons/products/timer-stroke.svg'
import smileyIcon from '../../assets/icons/products/smiley-stroke.svg'

const ProductItem = ({id, productImg, isLocker, imgAlt, productName, productPrice, tag}) => {
    const navigate = useNavigate()

    const [isVisible, setIsVisible] = useState(false)
    const { t } = useTranslation(["tabs"])

    const openProductCard = async () =>
    {
        navigate('/product/' + id)
    }

    const btnStyle =
    {
        padding: '14px',
        borderRadius: '14px',
        backgroundColor: '#1D1D1F',
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
    }

    const hitBtnStyle =
    {
        padding: '14px 20px 16px',
        borderRadius: '17px',
        backgroundColor: '#1D1D1F',
        color: '#FFFFFF',
        fontSize: '24px',
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
        gap: '4px',
    }

    const bgImg =
    {
        background: '',
        // background: isLocker ? `url(${productImg}) center center/cover no-repeat` : '#FFF',
    }

    const hitProductStyles =
    {
        padding: '35px 39px 39px 44px',
        gridColumn: '1/4',
        display: 'grid',
        gridTemplateColumns: '357px 2fr',
        gap: '84px',
    }

    const productImgStyles =
    {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        display: 'flex',
        margin: '0 auto',
        maxWidth: '70%',
        height: 'auto',
        objectFit: 'cover'
    }

    const hitProductImgStyles =
    {
        display: 'flex',
        width: '357px',
    }

    const hitProductInfoName =
    {
        width: '248px',
        fontSize: '44px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '100%',
    }

    const hitProductInfoAction =
    {
        marginTop: 0,
        paddingLeft: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '17px',
        background: '#F5F5F7',
    }

    const hitProductInfoPrice =
    {
        color: '#1D1D1F',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    }

    const btnTextStyle =
    {
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: 'normal',
    }

    const hitBtnTextStyle = {
        color: '#FFFFFF',
        fontSize: '24px',
        lineHeight: 'normal',
    }


    return (
        <AnimatePresence initial={true}>
            <div
                className={cl.product__card}
                style={tag ? hitProductStyles : bgImg}
                // onMouseEnter={() => setIsVisible(true)}
                // onMouseLeave={() => setIsVisible(false)}
            >
                {/* {isLocker ? '' :
                    <picture className={cl.product__card_picture}>
                        <source srcSet={productImg} type='image/png' />
                        <img src={productImg} alt={imgAlt} className={cl.product_img} />
                    </picture>
                } */}
                <picture
                    className={cl.product__card_picture}
                    // initial={{ y: 0, scale: 1 }}
                    // animate={{ y: 0, scale: 1 }}
                    // exit={{ y: 0, scale: 1 }}
                    // transition={{
                    //     // repeat: 1,
                    //     // repeatType: "reverse",
                    //     // type: 'spring',
                    //     ease: [0.17, 0.67, 0.83, 0.67]
                    // }}
                >
                    <source srcSet={productImg} type='image/png' />
                    <img
                        src={productImg}
                        alt={imgAlt}
                        style={tag ? hitProductImgStyles : productImgStyles}
                    />
                </picture>

                    {/* {
                        isVisible && (
                            <motion.div
                                initial={{height: 0}}
                                animate={{height: '115px'}}
                                exit={{height: 0}}
                                style={{overflow: 'hidden'}}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.01, 0.01, 0.02, 0.02]
                                }}
                                className={cl.product__info}
                            >
                                <p className={cl.product__info_name}>{productName}</p>
                                <div  className={cl.product__info_action}>
                                    <p  className={cl.product__info_price}>{productPrice}</p>
                                    <Button styles={btnStyle}
                                        className={cl.btn}
                                    >
                                        {t("btn")}
                                        <img src={arrowRightIcon} alt="arrow-right-icon" />    
                                    </Button>
                                </div>
                            </motion.div>
                        )
                    } */}

                <div
                    className={cl.product__info}
                    style={tag ? {background: 'none', padding: 0} : {background: '#F5F5F7'}}
                >
                    <p
                        className={cl.product__info_name}
                        style={tag ? hitProductInfoName : {}}
                    >{productName}</p>
                    {
                        tag && (
                            <div className={cl.benefits}>
                                <div className={cl.benefit__item}>
                                    <img className={cl.benefit__item_img} src={encryptionIcon} alt="" />
                                    <p className={cl.benefit__item_title}> Корпус из нержавеющей стали марки SUS </p>
                                </div>
                                <div className={cl.benefit__item}>
                                    <img className={cl.benefit__item_img} src={speedIcon} alt="" />
                                    <p className={cl.benefit__item_title + ' ' + cl.benefit__item_title_2}> Скорость прохода 30 человек /минуту </p>
                                </div>
                                <div className={cl.benefit__item}>
                                    <img className={cl.benefit__item_img} src={smileyIcon} alt="" />
                                    <p className={cl.benefit__item_title}> Планки «анти-паника» </p>
                                </div>
                            </div>
                        )
                    }
                    <div
                        className={cl.product__info_action}
                        style={tag ? hitProductInfoAction : {}}
                    >
                        <p
                            className={cl.product__info_price}
                            style={tag ? hitProductInfoPrice : {}}
                        >{productPrice}</p>
                        <Button styles={tag ? hitBtnStyle : btnStyle}
                            className={cl.btn}
                            onClick={openProductCard}
                        >
                            {t("btn")}
                            {/* <Link to={'/product'} style={tag ? hitBtnTextStyle : btnTextStyle}>{t("btn")}</Link> */}
                            <img src={arrowRightIcon} alt="arrow-right-icon" />    
                        </Button>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default ProductItem;