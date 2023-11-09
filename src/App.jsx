import { Suspense } from 'react'

import { useScrollHeader } from './hooks/useScrollHeader';

import Header from './components/Header/Header'
import HrApp from './components/HrApp/HrApp'
import MobileApp from './components/MobileApp/MobileApp'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import FilterTabs from './components/FilterTabs/FilterTabs'

import './App.css'

function App() {
  const {headerClosedStyles} = useScrollHeader()

  return (
    <>
      <Suspense fallback={null}>
        <Header style={headerClosedStyles} />
        {/* <div className="container">
          <Header />
        </div> */}
        <main className='main'>
          <div className="container">
            <FilterTabs />
            {/* <HrApp />
            <MobileApp /> */}
          </div>
          {/* <ContactUs /> */}
        </main>
          <Footer />
      </Suspense>
    </>
  )
}

export default App
