import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const FoodProductCard = ({image,Pname,Price,DPrice}) => {
  return (
    <div className='w-[17rem] flex flex-col items-center justify-center  md hover:shadow-[5px_10px_5px_#878386] p-[0.5rem] rounded-[0.5rem] gap-[0.5rem]  border border-[#FF8E00] '>
      <img className='w-[15rem]  h-[10rem] hover:scale-[1.09] transition-all duration-500'   src={image} alt="immagealt"/>
      <p className='text-center text-[1.5rem]'>{Pname}</p>
      <div className='flex justify-center gap-3'>
        <p className='text-[#3CB815] font-bold text-[1.1rem]'>{DPrice}</p>
        <strike>{Price}</strike>
      </div>
      <div className='flex items-center justify-around gap-4 '>

        <button className='flex items-center gap-3 rounded-[0.5rem] bg-[#FF1700] px-[0.4rem]  '>
        <FaEye className='cursor-pointer text-[#3CB815]'/> 
        <p className='cursor-pointer ease-in duration-500 hover:text-red-500 text-[0.9rem] text-white'>View Details</p>
        </button>
        <button className='flex items-center gap-3 rounded-[0.5rem] px-[0.1rem]  bg-[#06FF00] border-none'>
          <FaShoppingBag className='cursor-pointer text-[#3CB815]'/>
          <p className='duration-500 ease-in cursor-pointer hover:text-red-500 '>Add to Cart</p>
        </button>
      </div>
    </div>
  )
}

export default FoodProductCard
