import React from 'react'
import useLatestResearchData from './Hooks/LatestResearchData'
import LatestResearchData from './Component/LatestResearchCard'
import LatestResearchCard from './Component/LatestResearchCard'
import { Link } from 'react-router-dom'
const LatestResearch = () => {
  return (
    <div className='pt-[3rem] p-[2rem] flex flex-col gap-[1rem] items-center justify-center '>
        <div className=''>
            <p className='text-[#4BAF47] text-[1.5rem] font-mono '>Our Latest Research</p>
            <div className='flex flex-col lg:flex-row lg:gap-[24rem] lg:justify-center items-center  md:flex-row  md:justify-between xl:gap-[42rem]'>
            <h1 className='font-bold text-[2rem] md:text-[1.5rem]'>Let's checkout Our Latests Research</h1>
            <Link to={"/coming"}>
            <button className='p-[0.8rem] lg:p-[0.3rem] items-center justify-center rounded-[0.5rem] bg-[#4BAF47] text-white hover:bg-[#ffffff] hover:text-black border border-[#4BAF47] ease-in duration-300 w-fit'>DISCOVER MORE</button>
            </Link>
            </div>
        
        </div>
       <div className='flex flex-col gap-[0.5rem] lg:flex-row '>
        {useLatestResearchData.map((val,ind)=><LatestResearchCard image={val.image} link={val.link} For={val.For} content={val.content}/>)}
       </div>
    </div>
  )
}

export default LatestResearch
