import { useTranslation } from 'react-i18next'
import i18n from "../../i18n";
import { Link, useNavigate } from 'react-router-dom'


import ProductItem from '../ProductItem/ProductItem';
import products from '../../data/products'

import cl from './Products.module.css'

const Products = ({filter}) => {
    const { t } = useTranslation(["products"])

    let productItem

    // const productsName = products.map(product => product.name)

    if (filter === 'all')
    {
        productItem = products.map((product, i) =>
        {
            let isBgImg = false
            if (product.type === 'locker')
            {
                isBgImg = true
            }
            return <ProductItem
                key={product.id}
                id={product.id}
                productImg={product.img}
                isLocker={isBgImg}
                imgAlt={product.imgAlt}
                productName={t(`all.${i}.name`)}
                productPrice={t(`all.${i}.price`, {price: product.price})}
                tag={product.tag}
            >
                {/* <Link to={`/product/${product.id}`} style={tag ? hitBtnTextStyle : btnTextStyle}>{t("btn")}</Link> */}
            </ProductItem>
        })
    }
    else
    {
        productItem = products.filter((product) => product.type === filter).map((product, i) =>
        {
            let isBgImg = false
                if (product.type === 'locker')
                {
                    isBgImg = false
                }
                return <ProductItem
                    key={product.id}
                    productImg={product.img}
                    isLocker={isBgImg}
                    imgAlt={product.imgAlt}
                    productName={t(`${product.type}.${i}.name`)}
                    productPrice={t(`${product.type}.${i}.price`, {price: product.price})}
                    tag={product.tag}
                >
                    {/* <Link to={`/product/${product.id}`} style={tag ? hitBtnTextStyle : btnTextStyle}>{t("btn")}</Link> */}
                </ProductItem>
        })       
    }
    
    return (
        <div className={cl.products}>
            {productItem}
        </div>
    );
};

export default Products;