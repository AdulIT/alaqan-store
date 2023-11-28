import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMatchMedia } from '../../hooks/useMatchMedia'
import { motion } from "framer-motion";

import cl from './FilterTabs.module.css'
import tabs from '../../data/tabs'

import Button from '../UI/button/Button';
import Products from '../Products/Products';

const FilterTabs = () => {
    const { t } = useTranslation(["tabs"])
    const [isActive, setIsActive] = useState(false)
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    const {isMicroMobile, isSmallMobile, isMobile} = useMatchMedia();

    const btnStyles = 
    {
        position: 'relative',
        padding: isMicroMobile ? '5px 7px' : isSmallMobile ? '10px 12px' : isMobile ? '10px 14px 12px' : '14px 30px 16px 30px',
        borderRadius: '34px',
        backgroundColor: '#FFF',
        color: isActive ? '#1D1D1F' : '#889097',
        border: 'none',
        fontSize: isSmallMobile ? '1.4rem' : isMobile ? '1.6rem' : '1.8rem',
    }

    const btnActiveStyles = 
    {
        position: 'relative',
        padding: isMicroMobile ? '5px 7px' : isSmallMobile ? '10px 12px' : isMobile ? '10px 14px 12px' : '14px 30px 16px 30px',
        borderRadius: '34px',
        backgroundColor: 'transparent',
        fontSize: isSmallMobile ? '1.4rem' : isMobile ? '1.6rem' : '1.8rem',
    }

    const bubbleStyles =
    {
        position: 'absolute',
        borderRadius: '34px',
        backgroundColor: '#F5F5F7',
        zIndex: 10,
        inset: 0,
    }

    return (
        <section className={cl.products_page}>
                <div className={cl.tabs}>
                    {tabs.map(tab =>
                        {
                            return (<Button
                                key={tab.id}
                                styles={activeTab === tab.id ? btnActiveStyles : btnStyles}
                                className={cl.btn__mobile}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        style={bubbleStyles}
                                        transition={{ type: "spring", bounce: 0.1, duration: 0.7 }}
                                    />
                                )}
                                <span style={{position: 'relative', zIndex: 10}}>
                                    {t(`${tab.label}`)}
                                </span>
                            </Button>)
                        }
                    )}
                </div>
            <Products filter={activeTab} />
        </section>
    );
};

export default FilterTabs;