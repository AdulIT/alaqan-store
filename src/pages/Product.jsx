import ProductSubheader from '../components/ProductSubheader/ProductSubheader';
import Header from '../components/Header/Header';
import ProductMain from '../components/ProductMain/ProductMain';
import Benefit from '../components/Benefit/Benefits';

const Product = () => {
    return (
        <>
            <Header />
            <ProductSubheader />
            <ProductMain />
            <Benefit />
        </>
    );
};

export default Product;