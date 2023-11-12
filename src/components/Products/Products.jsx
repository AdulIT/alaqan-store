import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import i18n from "../../i18n";
import { Link, useNavigate } from 'react-router-dom'
import { useMatchMedia } from '../../hooks/useMatchMedia'
import { useRef } from 'react';
import { useEffect } from 'react';

import ProductItem from '../ProductItem/ProductItem';
import products from '../../data/products'

import cl from './Products.module.css'

const Products = ({filter}) => {
    const { t } = useTranslation(["products"])

    const {isSmallMobile, isMobile, isMediumTablet} = useMatchMedia();

    let productsStyle = {}

    let productItem

    if (filter === 'all')
    {
        productsStyle = {
            gridTemplateRows: isSmallMobile ? '175px' : isMobile ? '200px' : (isMediumTablet ? '350px' : '454px'),
        }
        productItem = products.map((product, i) =>
        {
            return <ProductItem
                key={product.id}
                id={product.id}
                productImg={product.img}
                imgAlt={product.imgAlt}
                productName={t(`all.${i}.name`)}
                productPrice={t(`all.${i}.price`, {price: product.price})}
                tag={product.tag}
            />
        })
    }
    else
    {
        productsStyle = {
            gridTemplateRows:
                (isSmallMobile && filter === 'turnstile') ? '175px'                
                    :
                isSmallMobile ? '240px'
                    :
                (isMobile && filter === 'turnstile') ? '200px'
                    :
                isMobile ? '300px'
                    :
                ((isMediumTablet && filter === 'turnstile') ? '350px'
                    :
                '454px'
            ),
        }
        productItem = products.filter((product) => product.type === filter).map((product, i) =>
        {
                return <ProductItem
                    key={product.id}
                    id={product.id}
                    productImg={product.img}
                    imgAlt={product.imgAlt}
                    productName={t(`${product.type}.${i}.name`)}
                    productPrice={t(`${product.type}.${i}.price`, {price: product.price})}
                    tag={product.tag}
                />
        })       
    }
    
    return (
        <div className={cl.products} style={productsStyle}>
            {productItem}
        </div>
    );
};

export default Products;