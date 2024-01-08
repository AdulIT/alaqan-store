import React from 'react'
import cl from './HrApp.module.css'
import { useTranslation } from 'react-i18next'
import Tabs from '../Tabs/Tabs'

const HrApp = () => {
    const { t } = useTranslation(["hrApp"])

    const customTitle = (lang) =>
    {
        switch(lang)
        {
            case 'en':
                return (
                    <h2 className={cl.title}>
                        {t('hrappTitle')}
                        {t('hrappTitleUnderlined')}
                        <span className={cl.title_underlined + ' ' + cl.en}>{t('hrappTitleLast')}</span>
                    </h2>
                )
            case 'ru':
                return (
                    <h2 className={cl.title}>
                        {t('hrappTitle')}
                        <span className={cl.title_underlined + ' ' + cl.ru}>{t('hrappTitleUnderlined')}</span>
                        {t('hrappTitleLast')}
                    </h2>
                )
            case 'kz':
                return (
                    <h2 className={cl.title}>
                        {t('hrappTitle')}
                        {t('hrappTitleUnderlined')}
                        <span className={cl.title_underlined + ' ' + cl.kz}>{t('hrappTitleLast')}</span>
                    </h2>
                )
        }
    }

    return (
        <section className={cl.hrapp} id="hrapp">
            { customTitle(localStorage.getItem('i18nextLng')) }

            <Tabs />
        </section>
    )
}

export default HrApp