import React from 'react'

const LatestResearchCard = ({image,For,link,content}) => {
  return (
    <div className='border  flex flex-col  gap-[0.9rem]  relative lg:w-[19rem] xl:w-[25rem]  md:w-fit '>
    <img src={image} alt="" className='xl:w-[23.5rem] h-[20rem] md:w-[45rem] md:h-[20rem]  object-cover ' />
    <h1 className='font-bold text-[1.2rem] hover:text-[#4BAF47] ease-in duration-500 cursor-pointer'>{link}</h1>
    <p className='text-[1rem] font-semibold text-start'>{content}</p>
    <button className='p-[0.3rem]  px-[1.3rem] rounded-[0.4rem] bg-[#4BAF47]  text-white border-none absolute top-[6rem] left-[2rem] sm:top-[13rem] sm:left-[8rem] md:top-[20rem] md:left-[14rem] lg:top-[6rem] lg:left-[5rem] xl:top-[11rem]  '>{For}</button>
    </div>
  )
}

export default LatestResearchCard
