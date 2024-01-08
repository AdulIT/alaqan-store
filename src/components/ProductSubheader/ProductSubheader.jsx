import { useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { scroller } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import { useMatchMedia } from '../../hooks/useMatchMedia'

import Button from '../UI/button/Button'

import cl from './ProductSubheader.module.css'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import fileIcon from '../../assets/icons/file.svg'

// eslint-disable-next-line react/prop-types
const ProductSubheader = ({ name, ...props }) => {
    const { t } = useTranslation(["tabs", "products"])
    const location = useLocation()
    const [computedStyle, setComputedStyle] = useState(null)

    const { ref: subheaderRef, inView, entry } = useInView({
        threshold: 1,
    });

    const {isSmallMobile, isMicroMobile} = useMatchMedia();

    useEffect(() =>
    {
        // console.log(inView);
        // setComputedStyle(window.getComputedStyle(subheaderRef.current).getPropertyValue('top'))

        // const observer = new IntersectionObserver((entries) =>
        // {
        //     const entry = entries[0]
        //     console.log('entry', entry);
        // }, {})

        // observer.observe(subheaderRef.current)
    }, [inView])

    const turnstileNames = {
        '/product/1': t(`products:all.${0}.name`),
        '/product/2': t(`products:all.${1}.name`),
        '/product/3': t(`products:all.${2}.name`),
        '/product/10': t(`products:all.${9}.name`),
    }

    const specificationBtnStyles = {
        padding: isMicroMobile ? '8px 60px 10px' : isSmallMobile ? '8px 15px 10px 15px' : '10px 20px 12px 20px',
        borderRadius: '16px',
        backgroundColor: 'transparent',
        color: '#1D1D1F',
        fontSize: isSmallMobile ? '16px' : '18px',
        border: '1px solid #E7E9EA',
        gap: '4px',
        // display: isMicroMobile ? 'flex' : isSmallMobile ? 'block' : 'flex',
        justifyContent: isMicroMobile ? 'center' : '',
    }

    const constructorBtnStyles = {
        padding: isMicroMobile ? '8px 47px 10px' : isSmallMobile ? '8px 15px 10px' : '10px 20px 12px 20px',
        borderRadius: '16px',
        backgroundColor: '#007AFF',
        color: '#FFFFFF',
        border: 'none',
        gap: '4px',
        fontSize: isSmallMobile ? '16px' : '18px',
        // display: isMicroMobile ? 'flex' : isSmallMobile || isMicroMobile ? 'block' : 'flex',
        justifyContent: isMicroMobile ? 'center' : '',
    }

    const subheaderBtnsStyles = {
        display: 'flex',
        gap: '10px',
    }

    const scrolTo = () =>
    {
        scroller.scrollTo('specification', {
            duration: 500,
            // delay: 100,
            // smooth: 'easeInCubic',
          });
    }
    // onClick={scrolTo}

    const handleClick = (e) =>
    {
        const specificationElement = document.getElementById('specification')

        if (specificationElement)
        {
            const offsetTop = specificationElement.offsetTop
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            })
            // document.getElementById('specification').scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start'
            // })
        }
        
    }

    return (
        <div className={cl.subheader} {...props}>
            <h2 className={cl.subheader_title}>
                {' '}
                {name}  {turnstileNames[location.pathname]}{' '}
            </h2>

            <div className={cl.subheader_btns} style={subheaderBtnsStyles}>
                <Button styles={specificationBtnStyles} onClick={handleClick}>
                    {
                        isMicroMobile ? ''
                        :
                        <img
                            src={fileIcon}
                            alt='file-icon'
                            loading='lazy'
                        />
                    }
                    {t("tabs:specificationBtn")}
                </Button>
                
                <Button styles={constructorBtnStyles} className={cl.subheader_btn__constructor}>
                    {t("tabs:constructorBtn")}
                    {
                        isMicroMobile ? ''
                        :
                        <img
                            src={arrowRightIcon}
                            alt='arrow-right-icon'
                            loading='lazy'
                        />
                    }
                </Button>
            </div>
        </div>
    )
}

export default ProductSubheader
