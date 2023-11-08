import { HashLink } from 'react-router-hash-link'
import { Link } from "react-scroll";
import { scroller } from 'react-scroll';

import Button from '../UI/button/Button'

import cl from './ProductSubheader.module.css'

import arrowRightIcon from '../../assets/icons/products/arrowRight.svg'
import fileIcon from '../../assets/icons/file.svg'
import { useLocation } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ProductSubheader = ({ name }) => {
    const location = useLocation()
    // console.log(location.pathname);

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

    const subheaderStyles = {
        padding: '18px 200px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const subheaderBtnsStyles = {
        display: 'flex',
        gap: '10px',
    }

    const handleClick = () =>
    {
        scroller.scrollTo('specification', {
            duration: 500,
            // delay: 100,
            smooth: 'easeInOutCubic',
          });
    }

    return (
        <div className={cl.subheader} style={subheaderStyles}>
            <h2 className={cl.subheader_title}>
                {' '}
                {name}  {turnstileNames[location.pathname]}{' '}
            </h2>

            <div className={cl.subheader_btns} style={subheaderBtnsStyles}>
                {/* <Link
                    to="specification"
                    smooth={'linear'}
                    duration={400}
                > */}
                    <Button styles={specificationBtnStyles} onClick={handleClick}>
                        <img src={fileIcon} alt='file-icon' />
                        Спецификация
                    </Button>
                {/* </Link> */}
                <Button styles={constructorBtnStyles} className={cl.subheader_btn__constructor}>
                    Собрать турникет
                    <img src={arrowRightIcon} alt='arrow-right-icon' />
                </Button>
            </div>
        </div>
    )
}

export default ProductSubheader
