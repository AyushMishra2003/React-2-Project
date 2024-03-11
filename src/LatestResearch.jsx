import React from 'react'
import useLatestResearchData from './Hooks/LatestResearchData'
import LatestResearchData from './Component/LatestResearchCard'
import LatestResearchCard from './Component/LatestResearchCard'
const LatestResearch = () => {
  return (
    <div className='pt-[3rem] p-[2rem]'>
        <div className='pt-[3rem] p-[0.9rem] lg:p-[1.3rem] '>
            <p className='text-[#4BAF47] text-[1.5rem] font-mono xl:ml-[5rem]'>Our Latest Research</p>
            <div className='flex flex-col lg:flex-row lg:gap-[17rem] lg:justify-center lg:items-center xl:gap-[26rem]'>
            <h1 className='font-bold text-[2rem]'>Let's checkout Our Latests Research</h1>
            <button className='p-[0.8rem] items-center justify-center rounded-[0.5rem] bg-[#4BAF47] text-white hover:bg-[#ffffff] hover:text-black border border-[#4BAF47] ease-in duration-300 w-fit'>DISCOVER MORE</button>
            </div>
        
        </div>
       <div className='flex flex-col gap-[0.5rem] lg:flex-row lg:items-center lg:justify-center'>
        {useLatestResearchData.map((val,ind)=><LatestResearchCard image={val.image} link={val.link} For={val.For} content={val.content}/>)}
       </div>
    </div>
  )
}

export default LatestResearch
