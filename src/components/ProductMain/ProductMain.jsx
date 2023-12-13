import { useLocation } from 'react-router-dom';

import { useMatchMedia } from '../../hooks/useMatchMedia'

import cl from './ProductMain.module.css'

import ts2000 from '../../assets/img/products/turnstile-ts2000-old.png'
import ts1000 from '../../assets/img/products/turnstile-ts1000.svg'
import fbl700 from '../../assets/img/products/turnstile-fbl700.svg'
import terminalT1 from '../../assets/img/products/alaqan-terminalT1.svg'

const ProductMain = () => {
    const location = useLocation()

    const {isMobile, isSmallMobile, isMicroMobile} = useMatchMedia();

    const turnstileNames = {
        '/product/1': {
            text: isSmallMobile ? `Турникет-трипод Alaqan \n TS2000 Pro классика \n для офисных зданий`
            : `Турникет-трипод Alaqan TS2000 Pro \n классика для офисных зданий`,
            title: isSmallMobile ? 'Безопасная \n классика' : 'Безопасная классика',
            img: ts2000,
        },
        '/product/2': {
            text: isMicroMobile ? 'Турникет-трипод Alaqan\n TS1000M Pro экономичный \n вариант для офисных зданий'
            : isSmallMobile ? 'Турникет-трипод Alaqan \n TS1000M Pro экономичный вариант \n для офисных зданий'
            : 'Турникет-трипод Alaqan TS1000M Pro \n экономичный вариант для офисных зданий',
            title: isMicroMobile ? 'Выгодно \n и\n практично'
            : isSmallMobile ? 'Выгодно \n и практично' : 'Выгодно и практично',
            img: ts1000,
        },
        '/product/3': {
            text: isMicroMobile ? 'Автоматизированный \n турникет\nAlaqan FBL700 идеален \nдля офисных зданий \nс большим количеством \nсотрудников'
            : isSmallMobile ? 'Автоматизированный турникет\nAlaqan FBL700 идеален \nдля офисных зданий \nс большим количеством \nсотрудников'
            : 'Автоматизированный турникет Alaqan FBL700 \n идеален для офисных зданий \n с большим количеством сотрудников',
            title: isMicroMobile ? 'Комфортно \nи\n эффективно'
            : isMobile ? 'Комфортно \nи эффективно'  : 'Комфортно и эффективно',
            img: fbl700,
        },
        '/product/10': {
            text: isMicroMobile ? 'Настенный терминал \n учета рабочего времени \nс системой Alaqan. \n Пожалуй лучшее решение\n для оптимизации\n рабочего процесса.'
            : 'Настенный терминал учета рабочего \n времени с системой Alaqan. \n Пожалуй лучшее решение для \n оптимизации рабочего процесса.',
            title: isSmallMobile ? 'Быстро\n и практично' : 'Быстро и практично',
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