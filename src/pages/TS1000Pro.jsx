import { Suspense } from 'react'

import { useScrollHeader } from '../hooks/useScrollHeader';

import ProductSubheader from '../components/ProductSubheader/ProductSubheader';
import Header from '../components/Header/Header';
import ProductMain from '../components/ProductMain/ProductMain';
import Benefit from '../components/Benefit/Benefits';
import ProductFeatures from '../components/ProductFeatures/ProductFeatures';
import Specificity from '../components/Specificity/Specificity';
import HrApp from '../components/HrApp/HrApp';
import MobileApp from '../components/MobileApp/MobileApp';
import Specifications from '../components/Specifications/Specifications';
import Footer from '../components/Footer/Footer';

function TS1000Pro() {
    const {headerClosedStyles, fixedSubheaderStyles} = useScrollHeader()

    return (
        <Suspense fallback={null}>
            <Header style={headerClosedStyles} />
            <ProductSubheader style={fixedSubheaderStyles} />
            <main>
                <ProductMain />
                <Benefit />
                <ProductFeatures />
                <Specificity />
                <HrApp />
                <MobileApp />
                <Specifications />
            </main>
            <Footer />
        </Suspense>
    );
}

export default TS1000Pro;