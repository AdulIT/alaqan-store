import {FlippableCard, FlippableCardHorizontal} from '../FlippableCard/FlippableCard';

import cl from './ProductFeatures.module.css'
import glowImg from '../../assets/img/productFeatures/glow.png'
import plusSignIconBlack from '../../assets/icons/productFeatures/plusSignIconBlack.svg'

import { useMatchMedia } from '../../hooks/useMatchMedia'

import {productFeatures, scanerProductFeatures} from '../../data/productFeatures';

const ProductFeatures = () => {
    // const [showfront, setshowfront] = useState(true)
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

    const productFeaturesItem = productFeatures.map((item, i) =>
    {
        if (isMediumTablet)
        {
            return (
                <FlippableCard
                    key={i}
                    // showfront={showfront}
                    frontTitle={item.frontTitle}
                    backTitle={item.backTitle}
                    backText={item.backText}
                >
                    <img src={item.img} alt="shield-img" style={imgStyles[i]} />
                    {i === 1 ? <img src={glowImg} alt="glow-img" style={glowImgStyles} /> : ''}

                    {/* <FrontCard key={i} frontTitle={item.frontTitle}> */}
                    {/* </FrontCard>
                    <BackCard backTitle={item.backTitle} backText={item.backText} /> */}
                </FlippableCard>
            )
        } else {
            if ( i !== 2)
            {
                return (
                    <FlippableCard
                        key={i}
                        // showfront={showfront}
                        frontTitle={item.frontTitle}
                        backTitle={item.backTitle}
                        backText={item.backText}
                        style={i === 2 ? lastItemStyles : {}}>
                        <img src={item.img} alt="shield-img" style={imgStyles[i]} />
                        {i === 1 ? <img src={glowImg} alt="glow-img" style={glowImgStyles} /> : ''}
    
                        {/* <FrontCard key={i} frontTitle={item.frontTitle}> */}
                        {/* </FrontCard>
                        <BackCard backTitle={item.backTitle} backText={item.backText} /> */}
                    </FlippableCard>
                )
            } else
            {
                return (
                    <FlippableCardHorizontal
                        key={i}
                        // showfront={showfront}
                        frontTitle={item.frontTitle}
                        backTitle={item.backTitle}
                        backText={item.backText}
                        style={i === 2 ? lastItemStyles : {}}>
                        <img src={item.img} alt="shield-img" style={imgStyles[i]} />
                        {/* <img src={glowImg} alt="glow-img" style={glowImgStyles} /> */}
                        {/* <FrontCard key={i} frontTitle={item.frontTitle}> */}
                        {/* </FrontCard>
                        <BackCard backTitle={item.backTitle} backText={item.backText} /> */}
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
                frontTitle={item.frontTitle}
                backTitle={item.backTitle}
                backText={item.backText}
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
            <h2 className={cl.title}> Преимущества </h2>
            <div className={cl.features_wrapper} style={featuresWrapperStyles}>
                { location.pathname === '/product/10' ? scanerProductFeaturesItem : productFeaturesItem }
            </div>
        </section>
    );
};

export default ProductFeatures;