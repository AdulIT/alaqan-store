import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';

import Table from '../UI/table/Table'
import TableRow from '../UI/tableRow/TableRow'
import Button from '../UI/button/Button'

import cl from './Specifications.module.css'

import { columnBasic, columnAdditional, columnCommon, columnBasicScaner, columnAdditionalScaner, columnCommonScaner } from '../../data/table'
import { useMatchMedia } from '../../hooks/useMatchMedia'

import downloadIcon from '../../assets/icons/productFeatures/downloadSimple.svg'

import specificationFile from '../../assets/spec-Ts2000.pdf'
import { useLocation } from 'react-router-dom'

const Specifications = () => {
    const location = useLocation()
    const {isSmallMobile, isMicroMobile} = useMatchMedia();
    const { t } = useTranslation(["specifications"]);

    const rowsBasic = location.pathname === '/product/10'
        ?
        columnBasicScaner.map((item, i) => {
            return <TableRow key={i} heading={t(`columnBasicScaner.${i}.heading`)} value={t(`columnBasicScaner.${i}.${location.pathname}`)} />
        })
        :
        columnBasic.map((item, i) => {
            return <TableRow key={i} heading={t(`columnBasic.${i}.heading`)} value={t(`columnBasic.${i}.${location.pathname}`)} />
        })

    const rowsAdditional = location.pathname === '/product/10'
        ?
        columnAdditionalScaner.map((item, i) => {
            return <TableRow key={i} heading={t(`columnAdditionalScaner.${i}.heading`)} value={t(`columnAdditionalScaner.${i}.${location.pathname}`)} />
        })
        :
        columnAdditional.map((item, i) => {
            return <TableRow key={i} heading={t(`columnAdditional.${i}.heading`)} value={t(`columnAdditional.${i}.${location.pathname}`)} />
        })

    const rowsCommon = location.pathname === '/product/10'
        ?
        columnCommonScaner.map((item, i) => {
            return <TableRow key={i} heading={t(`columnCommonScaner.${i}.heading`)} value={t(`columnCommonScaner.${i}.${location.pathname}`)} />
        })
        :
        columnCommon.map((item, i) => {
            return <TableRow key={i} heading={t(`columnCommon.${i}.heading`)} value={t(`columnCommon.${i}.${location.pathname}`)} />
        })

    const btnStyles = {
        padding: isSmallMobile ? '13px' : '10px 20px 12px 20px',
        borderRadius: isSmallMobile ? '10px' : '16px',
        backgroundColor: '#007AFF',
        color: '#fff',
        gap: isSmallMobile ? 'none' : '10px',
    }

    return (
        <Element name='specification' id='specification' className={cl.specification}>
            <h2 className={cl.title}> {t("title")} </h2>

            <div className={cl.wrapper}>
                <h3 className={cl.table_title}>{t("basicTable")}</h3>
                <Table>{rowsBasic}</Table>

                <h3 className={cl.table_title}>{t("additionalTable")}</h3>
                <Table>{rowsAdditional}</Table>

                <h3 className={cl.table_title}>{t("commonTable")}</h3>
                <Table>{rowsCommon}</Table>

                <Button styles={btnStyles} className={cl.btn}>
                    <img src={downloadIcon} alt='download-icon' />
                    <a
                        className={cl.download_link}
                        href={specificationFile}
                        target='_blank'
                        download='specification-ts2000'
                    >
                        {' '}
                        {
                            isSmallMobile ? ' ' : t("downloadBtn")
                        }
                    </a>
                </Button>
            </div>
        </Element>
    )
}

export default Specifications;
