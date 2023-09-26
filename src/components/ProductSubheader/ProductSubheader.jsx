import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'

import Button from '../UI/button/Button';

import cl from './ProductSubheader.modue.css'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import fileIcon from '../../assets/icons/file.svg'


const ProductSubheader = ({name}) => {

    const specificationBtnStyles =
    {
        padding: '10px 20px 12px 20px',
        borderRadius: '16px',
        backgroundColor: 'transparent',
        color: '#1D1D1F',
        border: '1px solid #E7E9EA',
        gap: '6px',
    }

    const constructorBtnStyles =
    {
        padding: '10px 20px 12px 20px',
        borderRadius: '16px',
        backgroundColor: '#007AFF',
        color: '#FFFFFF',
        border: 'none',
        gap: '6px',
    }

    const subheaderStyles =
    {
        padding: '18px 100px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const subheaderBtnsStyles = {
        display: 'flex',
        gap: '10px',
    }

    return (
        <div className={cl.subheader} style={subheaderStyles}>
            <h2 className={cl.subheader_title}> {name} Турникет Alaqan TS2000 Pro  </h2>

            <div className={cl.subheader_btns} style={subheaderBtnsStyles}>
                <HashLink to={'#specification'}>
                    <Button
                        styles={specificationBtnStyles}
                    >
                        <img src={fileIcon} alt="file-icon" />    
                        Спецификация
                    </Button>
                </HashLink>
                <Button
                    styles={constructorBtnStyles}
                >
                    Собрать турникет
                    <img src={arrowRightIcon} alt="arrow-right-icon" />    
                </Button>
            </div>
        </div>
    );
};

export default ProductSubheader;