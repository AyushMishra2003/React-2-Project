import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import FeaturesCard from './Component/FeaturesCard'
import Feature from './Feature'
import FoodProduct from './FoodProduct'
// import Review from './Review'
import Review_Page from './Review_Page'
import Review from './Review'
import AboutUs from './AboutUs'
import Blog from './Blog'
import OurService from './OurService'
import Faq from './Faq'
import Gallery from './Gallery'
import WorkProcess from './WorkProcess'
import Team from './Team'
const Home = () => {
  return (
    <div className='items-center w-[100vw] h-fit'>
        <About/>
         <AboutUs/>
        {/* <Feature/> */}
        <OurService/>
        <Gallery/>
        <WorkProcess/>
        <Team/>
        <Review/>
        <Blog/>
    </div>
  )
}

export default Home
