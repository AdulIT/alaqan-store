import React from 'react';
import cl from './ProductMain.module.css'

import turnstileImg from '../../assets/img/products/turnstile.svg'

const ProductMain = () => {
    return (
        <section className={cl.main}>
            <h1 className={cl.main_product__title}>Классически и безопасно. </h1>
            <p className={cl.main_product__descr}>
                Турникет-трипод Alaqan TS2000 Pro идеально подходит в качестве классического решения для офисных зданий
            </p>

            <img src={turnstileImg} alt="turnstileImg" />
        </section>
    );
};

export default ProductMain;