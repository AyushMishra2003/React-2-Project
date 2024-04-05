import React from 'react'
import aboutus from './assets/img/aboutusimg.png'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div className='flex flex-col  items-center justify-center  lg:flex-row lg:gap-[2rem] pt-[1.5rem]  '>
      <div>
        <img src={aboutus} className='w-[18rem] sm:w-[35rem] lg:w-[22rem] xl:w-[25rem]' alt="" />
      </div>
      <div className='flex flex-col justify-center gap-[1.3rem]  items-center lg:items-start  p-[2rem] lg:w-[38rem] xl:w-[40rem] '>
        <div className=''>
        <p className='text-[#4BAF47] text-start text-[1.2rem] font-bold italic'>ABOUT US</p>
        <p className='text-[2.2rem]  font-bold sm:text-[2.5rem] '>Environmental Food</p>
      </div>
      <div className=' flex flex-col  justify-center   gap-[1.2rem] '>
      <p className='text-[1.2rem] font-bold font-lobster'>Welcome to the Environmental Food Research Center, where we are dedicated to pioneering sustainable solutions for the food industry.  we understand the critical intersection between food production, environmental impact, and human health. Our mission is to conduct innovative research, foster collaboration, and provide actionable insights to promote a healthier, more sustainable future for all.</p>
      <div >
        <div className='flex items-center gap-[1rem] '>
           <p className=' border-none rounded-[50%] p-[0.1rem] bg-[#EEC044]'><TiTick className='text-[#ffffff]  text-[1.3rem]'/></p>
           <p className='text-[1.2rem] font-semibold'>Nutrition and Health:</p>
        </div>
        <div className='flex items-center gap-[1rem] '>
          <p className=' border-none rounded-[50%] p-[0.1rem] bg-[#EEC044]'><TiTick className='text-[#ffffff] text-[1.3rem]'/></p>
           <p className='text-[1.2rem] font-semibold'>Food Waste Reduction</p>
        </div>
        <div className='flex items-center gap-[1rem]'>
           <p className=' border-none rounded-[50%] p-[0.1rem] bg-[#EEC044]'><TiTick className='text-[#ffffff] text-[1.3rem]'/></p>
           <p className='text-[1.2rem] font-semibold'>Sustainable Agriculture.</p>
        </div>
      </div>  
      <Link to={"/about"}>
        <button className='p-[0.8rem] items-center justify-center rounded-[0.3rem] bg-[#4BAF47] text-white hover:bg-[#ffffff] hover:text-black border border-[#4BAF47] ease-in duration-300 w-fit'>DISCOVER MORE</button>
      </Link>  
      </div>
      </div>
    </div>
  )
}

export default AboutUs
