import Table from '../UI/table/Table'
import TableRow from '../UI/tableRow/TableRow'
import Button from '../UI/button/Button'

import cl from './Specifications.module.css'

import { columnBasic } from '../../data/table'
import { columnAdditional } from '../../data/table'
import { columnCommon } from '../../data/table'

import downloadIcon from '../../assets/icons/productFeatures/downloadSimple.svg'

import specificationFile from '../../assets/spec-Ts2000.pdf'
import { useLocation } from 'react-router-dom'

const Specifications = () => {
    const location = useLocation()

    const rowsBasic = columnBasic.map((item, i) => {
        return <TableRow key={i} heading={item.heading} value={item[location.pathname]} />
    })

    const rowsAdditional = columnAdditional.map((item, i) => {
        return <TableRow key={i} heading={item.heading} value={item.value} />
    })

    const rowsCommon = columnCommon.map((item, i) => {
        return <TableRow key={i} heading={item.heading} value={item[location.pathname]} />
    })

    const btnStyles = {
        padding: '10px 20px 12px 20px',
        borderRadius: '16px',
        backgroundColor: '#007AFF',
        color: '#fff',
        gap: '10px',
    }

    return (
        <section id='specification' className={cl.specification}>
            <h2 className={cl.title}> Спецификация </h2>

            <div className={cl.wrapper}>
                <h3 className={cl.table_title}>Основные</h3>
                <Table>{rowsBasic}</Table>

                <h3 className={cl.table_title}>Дополнительные</h3>
                <Table>{rowsAdditional}</Table>

                <h3 className={cl.table_title}>Общие</h3>
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
                        Скачать PDF{' '}
                    </a>
                </Button>
            </div>
        </section>
    )
}

export default Specifications
