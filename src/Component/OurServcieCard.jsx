import React from 'react'
import { Link } from 'react-router-dom'
const OurServcieCard = ({image,heading,text,logo,To}) => {
  return (
    <div className=' flex flex-col w-[18rem] relative sm:w-[35rem] lg:w-[18rem] items-center xl:w-[20rem] '>
      <Link to={To}>
       <div className=' w-[16rem] p-[1rem] rounded-[0.5rem] bg-[#FFFFFFF] absolute top-[-4rem] left-[1.5rem] bg-white cursor-pointer hover:bg-[#FF8E00] ease-in duration-500 sm:left-[7rem] lg:left-[1rem]'>
         <p>{text}</p>
         <h1 className='font-bold text-[1.7rem] '>{heading}</h1>
       </div>
       </Link>
       <img src={image} className='w-[18rem] sm:w-[35rem] lg:w-[18rem] xl:w-[22rem] xl:h-[15rem] overflow-hidden object-cover ' alt="serviceimg" />
    </div>
  )
}

export default OurServcieCard
