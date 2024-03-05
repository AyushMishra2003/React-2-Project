import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import FeaturesCard from './Component/FeaturesCard'
import Feature from './Feature'
import FoodProduct from './FoodProduct'

const Home = () => {
  return (
    <div className='  items-center w-[100vw] h-fit'>
        <About/>
        <Feature/>
        <FoodProduct/>
    </div>
  )
}

export default Home
