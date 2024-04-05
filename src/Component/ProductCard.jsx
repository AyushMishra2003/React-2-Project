import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
const ProductCard = ({image,text,To}) => {
  return (
    <div className='flex flex-col items-center justify-center '>
       <Link to={To}>
       <div className='relative flex flex-col items-center justify-center'>
       <img src={image} className='w-[20rem] h-[10rem] object-cover lg:w-[40rem] lg:h-[20rem] xl:w-[40rem] xl:h-[20rem] md:w-[40rem] ' alt="" />
       <div className=' w-[15rem] flex flex-col items-center  p-[1rem] rounded-[0.5rem] bg-[#FFFFFFF] absolute  cursor-pointer hover:bg-[#FF8E00]  border-blue-500 bg-[#bfc2b8] '>
         <p className='text-[2rem] text-black text-center'>{text}</p>
         <button className='p-[0.2rem] px-[2rem] flex items-center gap-[1rem] rounded-md bg-[#4BAF47] text-white'>
            <p className=''>View Detail</p>
            <FaLongArrowAltRight />
         </button>
       </div>
       </div>
       </Link>
    </div>
  )
  }

export default ProductCard
