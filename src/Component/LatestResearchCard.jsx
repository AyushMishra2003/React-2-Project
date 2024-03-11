import React from 'react'

const LatestResearchCard = ({image,For,link,content}) => {
  return (
    <div className='border  flex flex-col gap-[0.9rem] p-[0.5rem] relative lg:w-[19rem] xl:w-[23rem] '>
    <img src={image} alt="" />
    <h1 className='font-bold text-[1.2rem] hover:text-[#4BAF47] ease-in duration-500 cursor-pointer'>{link}</h1>
    <p className='text-[0.9rem] font-semibold'>{content}</p>
    <button className='p-[0.3rem]  px-[1.3rem] rounded-[0.4rem] bg-[#4BAF47] text-white border-none absolute top-[6rem] left-[2rem] sm:top-[13rem] sm:left-[8rem] md:top-[20rem] md:left-[14rem] lg:top-[6rem] lg:left-[5rem] xl:top-[11rem]  '>{For}</button>
    </div>
  )
}

export default LatestResearchCard
