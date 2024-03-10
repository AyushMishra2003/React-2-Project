import React from 'react'

const ProcessCard = ({image,logo,heading,content}) => {
  return (
    <div  className='relative flex flex-col w-[18rem] sm:w-[32rem] gap-[1rem] lg:w-[12rem]  xl:w-[15rem]'>
       <img src={image} className='w-[18rem] sm:w-[32rem] rounded-[1rem] lg:w-[12rem] xl:w-[15rem]' alt="" />
       <img src={logo} className='w-[5rem] rounded-[50%] absolute bottom-[8rem] left-[6rem] sm:left-[12rem] sm:bottom-[7rem] lg:left-[4rem] lg:bottom-[12rem]' alt="" />
       <div className='w-[10rem] lg:w-[12rem] xl:w-[14.5rem] flex flex-col items-start'>
       <h1 className='font-bold text-[1.2rem] sm:text-[2rem] lg:text-[1rem] '>{heading}</h1>
       <div className='w-[18rem] sm:w-[33rem] lg:w-fit'> 
       <p>{content}</p>
       </div>
       </div>
       <button className='p-[0.2rem] items-center justify-center rounded-[0.5rem] bg-[#4BAF47] text-white hover:bg-[#ffffff] hover:text-black border border-[#4BAF47] ease-in duration-300 w-fit'>DISCOVER MORE</button>
    </div>
  )
}

export default ProcessCard
