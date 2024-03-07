import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import FeaturesCard from './Component/FeaturesCard'
import Feature from './Feature'
import FoodProduct from './FoodProduct'
// import Review from './Review'
import Review_Page from './Review_Page'
import Review from './Review'
import Blog from './Blog'



const Home = () => {
  return (
    <div className='items-center w-[100vw] h-fit'>
        <About/>
        <Feature/>
        <FoodProduct/>
        <Review/>
        <Blog/>
    </div>
  )
}

export default Home
