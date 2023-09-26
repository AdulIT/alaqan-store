import { useTranslation } from 'react-i18next'

import Button from '../UI/button/Button'
import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'

import cl from './ProductItem.module.css'

const ProductItem = ({productImg, isLocker, imgAlt, productName, productPrice}) => {
    const { t } = useTranslation(["tabs"])

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

    const bgImg =
    {
        background: isLocker ? `url(${productImg}) center center/cover no-repeat` : '#FFF',
    }

    return (
        <div className={cl.product__card} style={bgImg}>
            {/* {isLocker ? '' :
                <picture className={cl.product__card_picture}>
                    <source srcSet={productImg} type='image/png' />
                    <img src={productImg} alt={imgAlt} className={cl.product_img} />
                </picture>
            } */}
            <picture className={cl.product__card_picture}>
                <source srcSet={productImg} type='image/png' />
                <img src={productImg} alt={imgAlt} className={cl.product_img} />
            </picture>
            <div className={cl.product__info}>
                <p className={cl.product__info_name}>{productName}</p>
                <div  className={cl.product__info_action}>
                    <p  className={cl.product__info_price}>{productPrice}</p>
                    <Button styles={btnStyle}
                        className={cl.btn}
                        // onMouseOver={handleMouseOver}
                        // onMouseOut={handleMouseOut}
                    >
                        {t("btn")}
                        <img src={arrowRightIcon} alt="arrow-right-icon" />    
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;