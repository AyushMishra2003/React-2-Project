import React from 'react'

const ProcessCard = ({image,logo1,heading1,content}) => {
  return (
    <div  className='relative flex flex-col lg:w-[12rem]  xl:w-[22rem] gap-[0.3rem] '>
       <img src={image} className='  rounded-[0.2rem] lg:w-[12rem] xl:w-[22rem] xl:h-[15rem] overflow-hidden object-cover ' alt="" />
       <div className='flex flex-col items-start gap-[0.6rem] '>
             <h1 className='font-bold text-[1.2rem] sm:text-[2rem] lg:text-[1rem] '>{heading1}</h1>
             <p className='cursor-pointer hover:text-[#4BAF47] ease-in duration-300'>{content}</p>
             <button className='p-[0.2rem] px-[2rem] rounded-[0.3rem] bg-[#4BAF47] text-white hover:bg-[#ffffff] hover:text-black border border-[#4BAF47] ease-in duration-300 '>READ MORE</button>
       </div>
      
    </div>
  )
}

export default ProcessCard
