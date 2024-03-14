import React from 'react'
import about from '../assets/aboutimg.jpg'
import { TiTick } from "react-icons/ti";
import img from '../assets/img/Home.jpg'
import Typewriter from '../Hooks/Typewriter';
const About = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <div className='bg-red-500'>
        <img src={img} className='w-[100vw] h-[24rem] lg:h-[30rem] xl:h-[34rem]' alt="" />
      </div>
      <div className='absolute top-[2rem] left-[1rem] text-white w-[17rem] lg:w-[22rem] xl-w-[42rem] flex flex-col gap-[1rem] sm:left-[2rem] lg:left-[6rem] lg:top-[5rem] xl:left-[15rem]'>
        <p className=' text-black text-[2.5rem] font-mono'>Be Natural</p>
        <Typewriter text="Always Greet Farmers For The Food We Eat" delay={100} infinite  />
        {/* <p className='text-[1em] '>And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</p> */}
      </div>
    </div>
  )
}

export default About
