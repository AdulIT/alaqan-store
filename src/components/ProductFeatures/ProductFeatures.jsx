import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import {FlippableCard, FlippableCardHorizontal} from '../FlippableCard/FlippableCard';
import { useMatchMedia } from '../../hooks/useMatchMedia';

import cl from './ProductFeatures.module.css';
import glowImg from '../../assets/img/productFeatures/glow.png';

import {productFeatures, scanerProductFeatures} from '../../data/productFeatures';

const ProductFeatures = () => {
    const { t } = useTranslation(["productFeatures"]);
    const {isMediumTablet} = useMatchMedia();

    const lastItemStyles =
    {
        // position: 'relative',
        gridColumn: isMediumTablet ? 'auto' : '1/3',
        display: 'grid',
        height: isMediumTablet ? 'auto' : '300px'
    }

    const imgStyles =
    {
        0: {
            position: 'absolute',
            width: isMediumTablet ? '80%' : 'auto',
            right: 0,
            bottom: 0,
            borderRadius: '0 0 30px 0'
        },
        1: {
            position: 'absolute',
            // width: isMediumTablet ? '90%' : 'auto',
            width: '100%',
            left: 0,
            right: 0,
            bottom: '0px',
        },
        2: {
            position: 'absolute',
            width: isMediumTablet ? '80%' : 'auto',
            right: '0',
            // transform: 'translateX(-50%)',
            bottom: '0',
            // width: '342px',
            height: '290px',
            borderRadius: '0 0 30px 0'
        }
    }

    const glowImgStyles = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -35%)',
        // zIndex: 10,
    }
    // console.log(isOpen)

    const productFeaturesItem = productFeatures.map((item, i) =>
    {
        if (isMediumTablet)
        {
            return (
                <FlippableCard
                    key={i}
                    frontTitle={t(`featuresTurnstile.${i}.frontTitle`)}
                    backTitle={t(`featuresTurnstile.${i}.backTitle`)}
                    backText={t(`featuresTurnstile.${i}.backText`)}
                >
                    <img src={item.img} alt="shield-img" style={imgStyles[i]} />
                    {i === 1 ? <img src={glowImg} alt="glow-img" style={glowImgStyles} /> : ''}
                </FlippableCard>
            )
        } else {
            if ( i !== 2)
            {
                return (
                    <FlippableCard
                        key={i}
                        frontTitle={t(`featuresTurnstile.${i}.frontTitle`)}
                        backTitle={t(`featuresTurnstile.${i}.backTitle`)}
                        backText={t(`featuresTurnstile.${i}.backText`)}
                        style={i === 2 ? lastItemStyles : {}}
                    >
                        <img src={item.img} alt="shield-img" style={imgStyles[i]} />
                        {i === 1 ? <img src={glowImg} alt="glow-img" style={glowImgStyles} /> : ''}
                    </FlippableCard>
                )
            } else
            {
                return (
                    <FlippableCardHorizontal
                        key={i}
                        frontTitle={t(`featuresTurnstile.${i}.frontTitle`)}
                        backTitle={t(`featuresTurnstile.${i}.backTitle`)}
                        backText={t(`featuresTurnstile.${i}.backText`)}
                        style={i === 2 ? lastItemStyles : {}}
                    >
                        <img src={item.img} alt="shield-img" style={imgStyles[i]} />
                    </FlippableCardHorizontal>
                )
            }
        }
        
    })

    const scanerProductFeaturesItem = scanerProductFeatures.map((item, i) =>
    {
        return (
            <FlippableCard
                key={i}
                frontTitle={t(`featuresScaner.${i}.frontTitle`)}
                backTitle={t(`featuresScaner.${i}.backTitle`)}
                backText={t(`featuresScaner.${i}.backText`)}
            >
                <img src={item.img} alt="shield-img" style={imgStyles[0]} />
                {i === 1 ? <img src={glowImg} alt="glow-img" style={glowImgStyles} /> : ''}
            </FlippableCard>
        )
    })

    let featuresWrapperStyles = {}

    if (location.pathname === '/product/1' || location.pathname === '/product/2' || location.pathname === '/product/3')
    {
        featuresWrapperStyles = 
            {
                gridTemplateRows: isMediumTablet ? 'repeat(3, 600px)' : '600px 300px'
            }
    }

    return (
        <section className={cl.features}>
            {/* <h2 className={cl.title}> Узнайте... </h2> */}
            <h2 className={cl.title}> {t("title")} </h2>
            <div className={cl.features_wrapper} style={featuresWrapperStyles}>
                { location.pathname === '/product/10' ? scanerProductFeaturesItem : productFeaturesItem }
            </div>
        </section>
    );
};

export default ProductFeatures;