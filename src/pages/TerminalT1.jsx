import { Suspense } from 'react'

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

function TerminalT1() {
    return (
        <Suspense fallback={null}>
            <Header />
            <ProductSubheader />
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

export default TerminalT1;