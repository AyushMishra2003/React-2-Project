import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import AboutUs from './AboutUs'
import OurService from './OurService'
import WorkProcess from './WorkProcess'
import Team from './Team'
import LatestResearch from './LatestResearch'
const Home = () => {
  return (
    <div className='items-center w-[100vw] h-fit'>
        <About/>
         <AboutUs/>
        <OurService/> 
        <Team/>
        <WorkProcess/>
        <LatestResearch/>
    </div>
  )
}

export default Home
