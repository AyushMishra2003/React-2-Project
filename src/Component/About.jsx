import React from 'react'
import about from '../assets/aboutimg.jpg'
import { TiTick } from "react-icons/ti";
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[100vw] p-[1.5rem] gap-[2rem] lg:flex-row'>
      <div>
        <img className='lg:w-[30rem]'  src={about} alt="About-image" />
      </div>
      <div className='flex flex-col gap-[1.5rem]'>
        <div>
            <h1 className='text-[2rem] lg:text-[3rem] lg:text-bold lg:w-[30rem] font-bold  text-black'>Best Organic Fruits And Vegetables</h1>
        </div>
        <div>
            <p className=' w-[17rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum ad et iusto sunt. Vero error quisquam consectetur dicta corrupti?</p>
        </div>
        <div>
            <div className='flex items-center gap-1'>
            <TiTick className='text-[#3CB815]'/>
             <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center gap-1'>
            <TiTick className='text-[#3CB815]'/>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center gap-1'>
            <TiTick className='text-[#3CB815]'/>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <button className='p-[1rem]  w-fit border border-black rounded-full px-[3rem] bg-[#3CB815] text-white border-none ease-in duration-1000  hover:text-red-400'>Read More</button>
      </div>
    </div>
  )
}

export default About
