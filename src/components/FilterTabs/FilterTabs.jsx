import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMatchMedia } from '../../hooks/useMatchMedia'

import cl from './FilterTabs.module.css'

import Button from '../UI/button/Button';
import Products from '../Products/Products';

const FilterTabs = () => {
    const { t } = useTranslation(["tabs"])
    const [isActive, setIsActive] = useState(false)
    const [toggleState, setToggleState] = useState('all')

    const {isMicroMobile, isSmallMobile, isMobile} = useMatchMedia();

    const btnStyles = 
    {
        padding: isMicroMobile ? '5px 7px' : isSmallMobile ? '10px 12px' : isMobile ? '10px 14px 12px' : '14px 30px 16px 30px',
        borderRadius: '34px',
        backgroundColor: '#FFF',
        color: isActive ? '#1D1D1F' : '#889097',
        border: 'none',
        fontSize: isSmallMobile ? '1.4rem' : isMobile ? '1.6rem' : '1.8rem',
    }

    const btnStylesActive =
    {
        padding: isMicroMobile ? '5px 7px' : isSmallMobile ? '10px 12px' : isMobile ? '10px 14px 12px' : '14px 30px 16px 30px',
        borderRadius: '34px',
        backgroundColor: '#F5F5F7',
        color: '#1D1D1F',
        border: 'none',
        fontSize: isSmallMobile ? '1.4rem' : isMobile ? '1.6rem' : '1.8rem',
    }

    const toggleTab = (state) =>
    {
        setToggleState(state)
    }

    return (
        <section className={cl.products_page}>
            {/* <div className={cl.filters}> */}
                <div className={cl.tabs}>
                    <Button
                        styles={toggleState === 'all' ? btnStylesActive : btnStyles}
                        className={cl.btn__mobile}
                        onClick={() => toggleTab('all')}
                    >
                        {t("all")}
                    </Button>
                    <Button
                        styles={toggleState === 'turnstile' ? btnStylesActive : btnStyles}
                        className={cl.btn__mobile}
                        onClick={() => toggleTab('turnstile')}
                    >
                        {t("turnstiles")}
                    </Button>
                    <Button
                        styles={toggleState === 'locker' ? btnStylesActive : btnStyles}
                        className={cl.btn__mobile}
                        onClick={() => toggleTab('locker')}
                    >
                        {t("lockers")}
                    </Button>
                    <Button
                        styles={toggleState === 'scaner' ? btnStylesActive : btnStyles}
                        className={cl.btn__mobile}
                        onClick={() => toggleTab('scaner')}
                    >
                        {t("scanners")}
                    </Button>
                </div>
            {/* </div> */}
            <Products filter={toggleState} />
        </section>
    );
};

export default FilterTabs;