import React, { useEffect } from 'react'
import useServiceData from './Hooks/OurServicedata'
import OurServcieCard from './Component/OurServcieCard'
import Review from './Review'
const OurService = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='flex flex-col justify-center gap-[1rem] items-center pt-[1rem] p-[0.2rem] sm:pb-[3rem] xl:pb-[3rem]  pb-[3rem]'>
      <div>
        <p className='text-[#4BAF47] text-center text-[1.5rem] font-mono'>We Provide</p>
        <h1 className='text-[2rem] text-center font-bold w-[20rem] sm:w-[22rem] md:w-[25rem]'>Best Natural Foods In The WorldHere</h1>
      </div>
      <Review/>
    </div>
  )
}

export default OurService
