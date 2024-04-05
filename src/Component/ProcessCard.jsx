import React from 'react'
import { Link } from 'react-router-dom'
const ProcessCard = ({image,logo1,heading1,content}) => {
  return (
    <div  className='relative flex flex-col items-center justify-center  gap-[0.3rem]  lg:w-[17rem] xl:w-[23rem]'>
       <img src={image} className='  rounded-[0.2rem] overflow-hidden xl:w-[23rem] w-[40rem] h-[15rem] object-cover md:w-[45rem] md:h-[23rem]' alt="" />
       <div className='flex flex-col items-start gap-[0.6rem] '>
             <h1 className='font-bold text-[1.2rem]  lg:text-[1rem] '>{heading1}</h1>
             <p className='cursor-pointer hover:text-[#4BAF47] ease-in duration-300'>{content}</p>
             <Link to={"/coming"}>
             <button className='p-[0.2rem] px-[2rem] rounded-[0.3rem] bg-[#4BAF47] text-white hover:bg-[#ffffff] hover:text-black border border-[#4BAF47] ease-in duration-300 '>READ MORE</button>
             </Link>
       </div>
      
    </div>
  )
}

export default ProcessCard
