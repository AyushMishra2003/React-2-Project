import React from 'react'
import useProcessData from './Hooks/ProcessData'
import ProcessCard from './Component/ProcessCard'
const WorkProcess = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[3rem] pb-[10rem]  gap-[3rem] '>
       <div className='flex flex-col items-center justify-center gap-[0.3rem]'>
        <p className='text-[#50AF47] text-[1.5rem]  font-mono'>Work Process</p>
        <div className=' w-[21rem] sm:w-[35rem] lg:w-[50rem]'>
        <h1 className='font-bold text-[2rem] text-center sm:text-[2.5rem] lg:text-[3rem] '>Steps In The Rearch Center</h1>
        </div>
        <p className='w-[18rem] font-normal sm:w-[32rem] lg:w-[58rem] lg:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime ducimus odio beatae expedita asperiores? Eaque consectetur earum aliquid dignissimos?</p>
       </div>
       <div className='flex flex-col items-center justify-center gap-[2rem] lg:flex-row'>
        {useProcessData.map((val,ind)=><ProcessCard image={val.image} heading={val.heading} content={val.content} logo={val.logo} key={ind+1} />)}
       </div>
    </div>
  )
}

export default WorkProcess
