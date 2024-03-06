import React from 'react'
import FeaturesCard from './Component/FeaturesCard'
import useFeaturesData from './Hooks/FeaturesHook'
const Feature = () => {
  return (
    <div className='flex flex-col justify-center items-center  p-[2rem] gap-3 h-fit '>
        <div className='flex flex-col
         items-center  justify-center gap-[1rem] text-black '>
            <h1 className='font-bold text-[2rem] border-b-2 border-[#FF1700] '>Our Features</h1>
            <p className='font-medium text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, distinctio.</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-2 border-black lg:flex-row mx:border lg:gap-7'>
            {useFeaturesData.map((val,ind)=><FeaturesCard icon={val.icon} text={val.text} content={val.content} key={ind+1}/>)}
        </div>
    </div>
  )
}

export default Feature
