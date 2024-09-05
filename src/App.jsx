import { useState } from 'react'
import NetworkGraph from './Components/NetworkGraph.jsx'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import LineChart from './Components/LineChart.jsx'
import Index from './Components/Index/Index.jsx'
import Company from './Components/Company/Company.jsx'
import Listing from './Components/Listing/Listing.jsx'
import States from './Components/States/States.jsx'
import Stories from './Components/Stories/Stories.jsx'
import About from './Components/About/About.jsx'
import Pcompanies from './Components/Pcompanies/Pcompanies.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  

  return (
    <>
      <div className=' bg-[#EDEDED] font-DMSans '>
        
        <Header />
        <Hero />
        <div className=' bg-[#fff] my-10 py-16 '>
        <Index />
        </div>

        <div className=' bg-[#fff] my-10 py-16 '>
        <Company />
        </div>
        <Listing />
        <States />
        <Stories />
        <About />
        <Pcompanies />
        <Footer />

      </div>
    </>
  )
}

export default App
