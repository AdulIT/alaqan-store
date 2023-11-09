import { useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { scroller } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

import Button from '../UI/button/Button'

import cl from './ProductSubheader.module.css'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import fileIcon from '../../assets/icons/file.svg'

// eslint-disable-next-line react/prop-types
const ProductSubheader = ({ name, ...props }) => {
    const location = useLocation()
    const [computedStyle, setComputedStyle] = useState(null)

    const { ref: subheaderRef, inView, entry } = useInView({
        threshold: 1,
    });

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
        '/product/1': 'Турникет Alaqan TS2000 Pro',
        '/product/2': 'Турникет Alaqan TS1000M Pro',
        '/product/3': 'Турникет Alaqan FBL700',
        '/product/10': 'Терминал учета рабочего времени Alaqan T1',
    }

    const specificationBtnStyles = {
        padding: '10px 20px 12px 20px',
        borderRadius: '16px',
        backgroundColor: 'transparent',
        color: '#1D1D1F',
        border: '1px solid #E7E9EA',
        gap: '6px',
    }

    const constructorBtnStyles = {
        padding: '10px 20px 12px 20px',
        borderRadius: '16px',
        backgroundColor: '#007AFF',
        color: '#FFFFFF',
        border: 'none',
        gap: '6px',
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
            smooth: 'easeInCubic',
          });
    }

    return (
        <div className={cl.subheader} {...props}>
            <h2 className={cl.subheader_title}>
                {' '}
                {name}  {turnstileNames[location.pathname]}{' '}
            </h2>

            <div className={cl.subheader_btns} style={subheaderBtnsStyles}>
                <Button styles={specificationBtnStyles} onClick={scrolTo}>
                    <img src={fileIcon} alt='file-icon' />
                    Спецификация
                </Button>
                <Button styles={constructorBtnStyles} className={cl.subheader_btn__constructor}>
                    Собрать турникет
                    <img src={arrowRightIcon} alt='arrow-right-icon' />
                </Button>
            </div>
        </div>
    )
}

export default ProductSubheader
