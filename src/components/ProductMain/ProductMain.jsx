import React from 'react';
import cl from './ProductMain.module.css'

// import turnstileImg from '../../assets/img/products/turnstile.svg'
import ts2000 from '../../assets/img/products/turnstile-ts2000.svg'
import ts1000 from '../../assets/img/products/turnstile-ts1000.svg'
import fbl700 from '../../assets/img/products/turnstile-fbl700.svg'
import { useLocation } from 'react-router-dom';

const ProductMain = () => {
    const location = useLocation()

    const turnstileNames = {
        '/product/1': {
            0: 'Турникет-трипод Alaqan TS2000 Pro классика для офисных зданий',
            1: 'Безопасная классика',
            2: ts2000,
        },
        '/product/2': {
            0: 'Турникет-трипод Alaqan TS1000M Pro экономичный вариант для офисных зданий',
            1: 'Выгодно и практично',
            2: ts1000,
        },
        '/product/3': {
            0: 'Автоматизированный турникет Alaqan FBL700 идеален для офисных зданий с большим количеством сотрудников',
            1: 'Комфортно и эффективно',
            2: fbl700,
        },
    }

    return (
        <section className={cl.main}>
            <h1 className={cl.main_product__title}>{turnstileNames[location.pathname][1]}</h1>
            <p className={cl.main_product__descr}>
                {turnstileNames[location.pathname][0]}
            </p>

            <img src={turnstileNames[location.pathname][2]} alt="turnstileImg" />
        </section>
    );
};

export default ProductMain;