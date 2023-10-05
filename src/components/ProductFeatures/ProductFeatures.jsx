import ProductFeature from '../ProductFeature/ProductFeature';
import cl from './ProductFeatures.module.css'

import shieldImg from '../../assets/img/productFeatures/shields.svg'
import lightningImg from '../../assets/img/productFeatures/lightning.svg'
import fireAlarmImg from '../../assets/img/productFeatures/fire-alarm.svg'

const ProductFeatures = () => {
    const productFeatures = [
        { title: 'Качество материалов', img: shieldImg },
        { title: 'Скорость работы', img: lightningImg },
        { title: 'Аварийная система', img: fireAlarmImg },
    ]

    const lastItemStyles =
    {
        // position: 'relative',
        gridColumn: '1/4',
        display: 'grid'
    }

    const imgStyles =
    {
        0: {
            position: 'absolute',
            right: 0,
            bottom: '90px',
        },
        1: {
            position: 'absolute',
            left: 0,
            bottom: '53px',
        },
        2: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '60px',
        }
    }

    const productFeaturesItem = productFeatures.map((item, i) =>
    {
        return (
            <ProductFeature key={i} title={item.title} style={i === 2 ? lastItemStyles : {}}>
                <img src={item.img} alt="shield-img" style={imgStyles[i]} />
            </ProductFeature>
        )
    })

    return (
        <section className={cl.features}>
            <h2 className={cl.title}> Узнайте... </h2>
            <div className={cl.features_wrapper}>
                { productFeaturesItem }
            </div>
        </section>
    );
};

export default ProductFeatures;