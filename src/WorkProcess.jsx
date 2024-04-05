import React from 'react'
import useProcessData from './Hooks/ProcessData'
import ProcessCard from './Component/ProcessCard'
const WorkProcess = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[3rem] gap-[3rem] p-[2rem]  '>
       <div className='flex flex-col items-center justify-center gap-[0.3rem] sm:w-[30rem]'>
        <p className='text-[rgb(80,175,71)] text-[1.5rem]  font-mono'>Work Process</p>
        <h1 className='font-bold text-[2rem] text-center  lg:text-[3rem] '>Steps In The Rearch Center</h1>
        <p className='font-normal lg:w-[58rem] lg:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime ducimus odio beatae expedita asperiores? Eaque consectetur earum aliquid dignissimos?</p>
       </div>
       <div className='flex flex-col  gap-[2rem] lg:flex-row '>
        {useProcessData.map((val,ind)=><ProcessCard image={val.image} heading1={val.heading1} content={val.content} logo1={val.logo1} key={ind+1} />)}
       </div>
    </div>
  )
}

export default WorkProcess
