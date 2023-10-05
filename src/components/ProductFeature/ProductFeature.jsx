import Button from '../UI/button/Button';
import cl from './ProductFeature.module.css'

import plusSignIcon from '../../assets/icons/productFeatures/plusSignIcon.svg'

const ProductFeature = ({title, children, ...props}) => {

    const btnStyles =
    {
        padding: 0,
        backgroundColor: 'transparent'
    }

    return (
        <div className={cl.feature_card} {...props}>
            <h3 className={cl.title}> {title} </h3>
                {children}
            <Button styles={btnStyles}>
                <img className={cl.btn_icon} src={plusSignIcon} alt="" />
            </Button>
        </div>
    );
};

export default ProductFeature;