import { Suspense } from 'react'
import Header from './components/Header/Header'
import './App.css'
import HrApp from './components/HrApp/HrApp'
import MobileApp from './components/MobileApp/MobileApp'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import FilterTabs from './components/FilterTabs/FilterTabs'


function App() {

  return (
    <>
      <Suspense fallback={null}>
        <Header />
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
