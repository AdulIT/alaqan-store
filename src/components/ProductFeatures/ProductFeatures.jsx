import { useState } from 'react';

import ProductFeature from '../Card/Card';
import FlippableCard from '../FlippableCard/FlippableCard';

import cl from './ProductFeatures.module.css'

import productFeatures from '../../data/productFeatures';

const ProductFeatures = () => {
    const [showFront, setShowFront] = useState(true)

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

    const handleClick = () =>
    {
        setShowFront(prev => !prev)
    }

    const productFeaturesItem = productFeatures.map((item, i) =>
    {
        return (
            <FlippableCard
                key={i}
                showFront={showFront}
                frontTitle={item.frontTitle}
                backTitle={item.backTitle}
                backText={item.backText}
                style={i === 2 ? lastItemStyles : {}}>
                <img src={item.img} alt="shield-img" style={imgStyles[i]} />
                {/* <FrontCard key={i} frontTitle={item.frontTitle}> */}
                {/* </FrontCard>
                <BackCard backTitle={item.backTitle} backText={item.backText} /> */}
            </FlippableCard>
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