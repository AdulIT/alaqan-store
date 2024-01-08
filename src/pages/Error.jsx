import React from 'react'
import { useTranslation } from 'react-i18next'

import { useScrollHeader } from '../hooks/useScrollHeader';

import errorImg from '../assets/img/404/404.jpg'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Error = () => {
    const {headerClosedStyles} = useScrollHeader()
    const { t } = useTranslation(["errorpage"])

    return (
        <>
            <Header style={headerClosedStyles} />
            <main className='errorpage_main'>
                <img
                    src={errorImg}
                    alt="error"
                    loading='lazy'
                />
                <p> {t("errorText")} </p>
            </main>
            <Footer />
        </>
    );
};

export default Error;