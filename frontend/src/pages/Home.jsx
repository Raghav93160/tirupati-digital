import React from 'react'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChoose'
import AboutPreview from '../components/AboutPreview'
import HowItWorks from '../components/HowItWorks'
import ConnectionCTA from '../components/ConnectionCTA'
import Banner from '../components/Banner'
 

const Home = () => {
  return (
    <>
   {/* <img src="\public\Banner.png" alt="" /> */}
   <Banner/>
   <Services/>
   <WhyChooseUs/>
   <AboutPreview/>
   <HowItWorks/>
   <ConnectionCTA/>
    </>
  )
}

export default Home