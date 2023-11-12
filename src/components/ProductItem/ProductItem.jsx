import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useMatchMedia } from '../../hooks/useMatchMedia'

import cl from './ProductItem.module.css'

import Button from '../UI/button/Button'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import encryptionIcon from '../../assets/icons/products/shield-stroke.svg'
import speedIcon from '../../assets/icons/products/timer-stroke.svg'
import smileyIcon from '../../assets/icons/products/smiley-stroke.svg'

const ProductItem = ({id, productImg, imgAlt, productName, productPrice, tag}) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [isVisible, setIsVisible] = useState(false)
    const { t } = useTranslation(["tabs"])

    const {isSmallMobile, isMediumMobile, isMobile, isMediumTablet, isTablet} = useMatchMedia();

    const openProductCard = async () =>
    {
        navigate('/product/' + id)
    }

    const btnStyle =
    {
        padding: isTablet ? '10px' : '14px',
        borderRadius: '14px',
        backgroundColor: '#1D1D1F',
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
        gap: '4px'
    }

    const hitBtnStyle =
    {
        padding: isTablet ? '12px 15px 14px' : '14px',
        borderRadius: '17px',
        backgroundColor: '#1D1D1F',
        color: '#FFFFFF',
        fontSize: '18px',
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
        gap: '4px',
    }

    const hitProductStyles =
    {
        padding: isMediumTablet ? '0 39px 0 44px' : '35px 39px 39px 44px',
        gridColumn: isMediumTablet ? '1/3' : '1/4',
        display: 'grid',
        gridTemplateColumns: isMediumTablet ? '1fr 1fr' : '357px 2fr',
        gap: isMediumTablet ? '10px' : '84px',
        height: isMediumTablet ? '350px' : 'initial',
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
        width: isMediumTablet ? '250px' : '357px',
    }

    const hitProductInfoName =
    {
        width: '252px',
        fontSize: isTablet ? '36px' : '44px',
        fontStyle: 'normal',
        fontWeight: 500,
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
        width: '100%',
    }

    const hitProductInfoPrice =
    {
        color: '#1D1D1F',
        fontSize: isTablet ? '20px' : '24px',
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
        fontSize: isTablet ? '14px' : '18px',
        lineHeight: 'normal',
    }

    const hitProductBtnIcon = {
        width: '14px',
    }

    const productBtnIcon = {
        width: '14px',
    }


    return (
        <AnimatePresence initial={true}>
            <div
                className={cl.product__card}
                style={hitProductStyles}
            >
                <picture className={cl.product__card_picture}>
                    <source srcSet={productImg} type='image/png' />
                    <img
                        src={productImg}
                        alt={imgAlt}
                        style={tag ? hitProductImgStyles : productImgStyles}
                    />
                </picture>

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
                                    <p className={cl.benefit__item_title}> {isMediumTablet ? 'Сталь SUS' : 'Корпус из нержавеющей стали марки SUS'}</p>
                                </div>
                                <div className={cl.benefit__item}>
                                    <img className={cl.benefit__item_img} src={speedIcon} alt="" />
                                    <p className={cl.benefit__item_title + ' ' + cl.benefit__item_title_2}>{isMediumTablet ? '30 чел/мин' : 'Скорость прохода 30 человек / минуту' }</p>
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
                            <Link to={`/product/${id}`} style={tag ? hitBtnTextStyle : btnTextStyle}>{t("btn")}</Link>
                            <img style={tag ? hitProductBtnIcon : productBtnIcon} src={arrowRightIcon} alt="arrow-right-icon" />    
                        </Button>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default ProductItem;