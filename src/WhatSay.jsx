import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Review from './Review';

const WhatSay = () => {
  return (
    <div className='w-[100vw] bg-[#170F2F] flex flex-col items-center justify-center p-[2rem]'>
       <div className='flex flex-col  xl:w-[18rem] text-white xl:gap-[0.8rem]'>
          <button className='px-[1.5rem] p-[0.5rem] rounded-[10rem] text-[#5B31EE] bg-white w-fit'>Course List</button>
          <p className='text-[2rem] font-semibold'>What They Say About us</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aspernatur vel sapiente quasi repellat! Nobis cupiditate facere magni nulla, blanditiis </p>
          <button className='flex p-[0.8rem] px-[1rem] gap-[0.5rem] bg-[#F2277E] items-center justify-center w-fit hover:bg-[#170f2f] border border-[#F2277E] ease-in duration-500'><p>Explore More</p> <FaLongArrowAltRight />   </button>
       </div>
       <Review/>
    </div>
  )
}

export default WhatSay
