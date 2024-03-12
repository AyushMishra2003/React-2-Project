import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import Review_Page from './Review_Page'
import AboutUs from './AboutUs'
import OurService from './OurService'
import Gallery from './Gallery'
import WorkProcess from './WorkProcess'
import Team from './Team'
import LatestResearch from './LatestResearch'
const Home = () => {
  return (
    <div className='items-center w-[100vw] h-fit'>
        <About/>
         <AboutUs/>
        {/* <Feature/> */}
        <OurService/> 
        <Team/>
        {/* <Gallery/> */}
        <WorkProcess/>
       
        {/* <Review/> */}
        <LatestResearch/>
    </div>
  )
}

export default Home
