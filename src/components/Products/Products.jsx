import { useTranslation } from 'react-i18next'
import i18n from "../../i18n";

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
                isBgImg = false
            }
            return <ProductItem
                key={product.id}
                productImg={product.img}
                isLocker={isBgImg}
                imgAlt={product.imgAlt}
                productName={t(`all.${i}.name`)}
                productPrice={t(`all.${i}.price`, {price: product.price})}
            />
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
                />
        })       
    }
    
    return (
        <div className={cl.products}>
            {productItem}
        </div>
    );
};

export default Products;