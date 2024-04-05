import React, { useEffect } from 'react'
import Header from './Component/Header'
import About from './Component/About'
import AboutUs from './AboutUs'
import OurService from './OurService'
import WorkProcess from './WorkProcess'
import Team from './Team'
import LatestResearch from './LatestResearch'
import BlogPage from './BlogPage'
import Subscribe from './Subscribe'
import Review from './Review'
import WhatSay from './WhatSay'
import RandD from './Component/RandD'
const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='flex flex-col items-center w-[100vw] justify-center'>
       <About/>
         <RandD/>
         <AboutUs/>
        <OurService/> 
        <Team/>
        <LatestResearch/> 
        {/* <Subscribe/> */}
        {/* <Team/> */}
    </div>
  )
}

export default Home
