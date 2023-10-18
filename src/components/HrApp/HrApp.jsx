import React from 'react'
import cl from './HrApp.module.css'
import { useTranslation } from 'react-i18next'
import Tabs from '../Tabs/Tabs'

const HrApp = () => {
    const { t } = useTranslation(["hrApp"])
    return (
        <section className={cl.hrapp} id="hrapp">
            <h2 className={cl.title}>
                {t('hrappTitle')}
                {/* <span className={cl.title_underlined}>{t('hrappTitleUnderlined')}</span> */}
            </h2>

            <Tabs />
        </section>
    )
}

export default HrApp