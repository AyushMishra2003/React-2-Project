import React from 'react'
import useServiceData from './Hooks/OurServicedata'
import OurServcieCard from './Component/OurServcieCard'
const OurService = () => {
  return (
    <div className='flex flex-col justify-center gap-[6rem] items-center pt-[3rem] p-[4rem] '>
      <div>
        <p className='text-[#4BAF47] text-center text-[1.5rem] font-mono'>We Provide</p>
        <h1 className='text-[2rem] text-center font-bold w-[20rem] sm:w-[22rem] md:w-[25rem]'>Best Agriculture Foods In The WorldHere</h1>
      </div>
      <div className='flex flex-col  gap-[8rem] lg:flex-row lg:gap-[3rem]'>
      {useServiceData.map((val,ind)=><OurServcieCard image={val.img} heading={val.heading} text={val.text} logo={val.logo} key={ind+1}/>)}
      </div>
    </div>
  )
}

export default OurService
