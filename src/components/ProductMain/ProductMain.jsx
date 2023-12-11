import { useLocation } from 'react-router-dom';

import { useMatchMedia } from '../../hooks/useMatchMedia'

import cl from './ProductMain.module.css'

import ts2000 from '../../assets/img/products/turnstile-ts2000.svg'
import ts1000 from '../../assets/img/products/turnstile-ts1000.svg'
import fbl700 from '../../assets/img/products/turnstile-fbl700.svg'
import terminalT1 from '../../assets/img/products/alaqan-terminalT1.svg'

const ProductMain = () => {
    const location = useLocation()

    const {isMobile, isSmallMobile} = useMatchMedia();

    const turnstileNames = {
        '/product/1': {
            text: isSmallMobile ? `Турникет-трипод Alaqan \n TS2000 Pro классика \n для офисных зданий`
            : `Турникет-трипод Alaqan TS2000 Pro \n классика для офисных зданий`,
            title: isSmallMobile ? 'Безопасная \n классика' : 'Безопасная классика',
            img: ts2000,
        },
        '/product/2': {
            text: 'Турникет-трипод Alaqan TS1000M Pro \n экономичный вариант для офисных зданий',
            title: 'Выгодно и практично',
            img: ts1000,
        },
        '/product/3': {
            text: 'Автоматизированный турникет Alaqan FBL700 \n идеален для офисных зданий с большим количеством сотрудников',
            title: 'Комфортно и эффективно',
            img: fbl700,
        },
        '/product/10': {
            text: 'Настенный терминал учета рабочего времени с системой Alaqan. \n Пожалуй лучшее решение для оптимизации рабочего процесса.',
            title: 'Быстро и практично',
            img: terminalT1,
        },
    }

    return (
        <section className={cl.main}>
            <h1 className={cl.main_product__title}>{turnstileNames[location.pathname]?.title}</h1>
            <p className={cl.main_product__descr}>
                {turnstileNames[location.pathname]?.text}
            </p>

            <img src={turnstileNames[location.pathname]?.img} alt="turnstileImg" />
        </section>
    );
};

export default ProductMain;