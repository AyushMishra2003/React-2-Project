import React from 'react'
import { TiTick } from "react-icons/ti";
import img from '../assets/img/Home.jpg'
import Typewriter from '../Hooks/Typewriter';
import reasearch from '../assets/img/researchlogo.png'
import protoype from '../assets/img/prototype.png'
import marketinglogo from '../assets/img/marketinglogo.png'
const About = () => {
  return (
    <div className='flex flex-col items-center hero-img w-[100%] h-[100vh] gap-[2.5rem]'>
     
      <div className=' gap-[1rem] mt-[7rem]  flex flex-col items-center justify-center'>
        {/* <p className=' text-white text-[2.5rem]  ont-mono'>Be Natural</p> */}
         <div className='flex flex-col items-center justify-center font-serif '>
            <p className='text-white xl:text-[3.5rem] font-curve text-[1.7rem] sm:text-[2rem] md:text-[3rem]'>Innovate your food product with us !</p>
            <p className='text-white xl:text-[1rem] w-[15rem] sm:text-center sm:w-[30rem] sm:text-[2rem] text-[1.5rem] md:w-[40rem] '>Advance solution  in Product development & Pilot Manufacturing</p>
         </div>
        {/* <Typewriter text="Welcome to the Environmental Food Research Center" delay={100} infinite  /> */}
        <div className='flex sm:flex-row flex-col xl:gap-[2rem] gap-[1rem] text-white xl:items-center items-start justify-center border-t-2 border-b-2 p-[2rem]'>
          <div className='flex text-[1.5rem] items-center justify-center'>
            <img src={reasearch} alt="" className='xl:w-[4rem]' />
            <p className='font-serif'>Research</p>
          </div>
          <div className='flex text-[1.5rem] items-center justify-center gap-[2rem]'>
            <img src={protoype} alt=""  className='xl:w-[4rem]' />
            <p className='font-serif'>Prototype</p>
          </div>
          <div className='text-[1.5rem] flex items-center justify-center gap-[2rem]'>
            <img src={marketinglogo} alt="" className='xl:w-[4rem]' />
            <p className='font-serif'>Marketing</p>
          </div>
        </div>
        <p className='text-center text-white xl:text-[1rem]'>Don't Just dream,create!Bring your food product ideas to life with our expert R&D team</p>
      </div>
    </div>
  )
}

export default About
