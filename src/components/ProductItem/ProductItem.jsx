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
    // const location = useLocation()

    // const [isVisible, setIsVisible] = useState(false)
    const { t } = useTranslation(["tabs", "hitProductInfo"])

    const {isMicroMobile, isSmallMobile, isMobile, isMediumTablet, isTablet} = useMatchMedia();

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
        fontSize: '1.4rem',
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
        gap: '4px'
    }

    const bgImg =
    {
        background: '',
        // background: isLocker ? `url(${productImg}) center center/cover no-repeat` : '#FFF',
    }

    const hitBtnStyle =
    {
        padding: isTablet ? '12px 15px 14px' : '14px',
        borderRadius: '17px',
        backgroundColor: '#1D1D1F',
        color: '#FFFFFF',
        fontSize: '1.8rem',
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
        gap: '4px',
    }

    const hitProductStyles =
    {
        padding: isMicroMobile || isMobile ? '0': (isMediumTablet ? '0 39px 0 44px' : '35px 39px 39px 44px'),
        gridColumn: isMediumTablet ? '1/3' : '1/4',
        display: 'grid',
        gridTemplateColumns: isMediumTablet ? '1fr 1fr' : '357px 2fr',
        gap: isMicroMobile || isMobile ? '0' : (isMediumTablet ? '10px' : '84px'),
    }

    const productImgStyles =
    {
        position: 'absolute',
        top: isMicroMobile && id === 2 ? '33%' : isMicroMobile && id === 3 ? '34%': isSmallMobile && id === 10 ? '30%' : '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        display: 'flex',
        margin: '0 auto',
        maxWidth: isSmallMobile && id === 7 ? '90%'
                  : isSmallMobile && id === 6 ? '80%'
                  : isSmallMobile && id === 10 ? '30%'
                  : isSmallMobile ? '50%' 
                  : isMobile && id === 10 ? '30%' 
                  : (isMobile ? '60%' : '70%'),
        height: 'auto',
        objectFit: 'cover'
    }

    const hitProductImgStyles =
    {
        display: 'flex',
        width: isMobile ? '130px' : (isMediumTablet ? '250px' : '357px'),
    }

    const hitProductInfoName =
    {
        width: isMobile ? '115px' : '252px',
        fontSize: isSmallMobile ? '1.6rem' : isMobile ? '2rem' : (isTablet ? '3.6rem' : '4.4rem'),
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '100%',
    }

    const hitProductInfoAction =
    {
        marginTop: 0,
        paddingLeft: isMobile ? '0' : '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '17px',
        background: isMobile ? 'transparent' : '#F5F5F7',
        width: '100%',
    }

    const hitProductInfoPrice =
    {
        color: '#1D1D1F',
        fontSize: isMobile ? '1.6rem' : (isTablet ? '2rem' : '2.4rem'),
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    }

    const btnTextStyle =
    {
        color: '#FFFFFF',
        fontSize: '1.4rem',
        lineHeight: 'normal',
    }

    const hitBtnTextStyle = {
        color: '#FFFFFF',
        fontSize: isTablet ? '1.4rem' : '1.8rem',
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
                style={tag ? hitProductStyles : bgImg}
                onClick={() => isMobile ? openProductCard() : ''}
            >
                <picture className={cl.product__card_picture}>
                    <source srcSet={productImg} type='image/png' />
                    <img
                        src={productImg}
                        alt={imgAlt}
                        style={tag ? hitProductImgStyles : productImgStyles}
                        loading='lazy'
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
                                    <img className={cl.benefit__item_img} src={encryptionIcon} alt="encryption-Icon" loading='lazy' />
                                    <p className={cl.benefit__item_title}> {isMediumTablet ? t("hitProductInfo:benefitFirstShort") : t("hitProductInfo:benefitFirst")}</p>
                                </div>
                                <div className={cl.benefit__item}>
                                    <img className={cl.benefit__item_img} src={speedIcon} alt="speed-Icon" loading='lazy' />
                                    <p className={cl.benefit__item_title + ' ' + cl.benefit__item_title_2}>{isMediumTablet ? t("hitProductInfo:benefitSecondShort") : t("hitProductInfo:benefitSecond") }</p>
                                </div>
                                <div className={cl.benefit__item}>
                                    <img className={cl.benefit__item_img} src={smileyIcon} alt="smiley-Icon" loading='lazy' />
                                    <p className={cl.benefit__item_title}> {t("hitProductInfo:benefitThird")} </p>
                                </div>
                            </div>
                        )
                    }
                    <div
                        className={cl.product__info_action}
                        style={tag ? hitProductInfoAction : {}}
                    >
                        {isMobile ?
                            (<p
                                className={cl.product__info_price}
                                style={tag ? hitProductInfoPrice : {}}
                            >{productPrice}</p>
                            )
                        :
                            <>
                                <p
                                    className={cl.product__info_price}
                                    style={tag ? hitProductInfoPrice : {}}
                                >{productPrice}</p>
                                <Button styles={tag ? hitBtnStyle : btnStyle}
                                    className={cl.btn}
                                    onClick={openProductCard}
                                >
                                    <Link to={`/product/${id}`} style={tag ? hitBtnTextStyle : btnTextStyle}>{t("tabs:btn")}</Link>
                                    <img
                                        style={tag ? hitProductBtnIcon : productBtnIcon}
                                        src={arrowRightIcon}
                                        alt="arrow-right-icon"
                                        loading='lazy'
                                    />    
                                </Button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default ProductItem;