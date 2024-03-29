import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const FoodProductCard = ({image,Pname,Price,DPrice}) => {
  return (
    <div className='w-[20rem] flex flex-col items-center justify-center  md hover:shadow-[5px_10px_5px_#878386]  rounded-[0.5rem] gap-[0.2rem]  border border-[#FF8E00] '>
      <img className='w-[15rem]  h-[10rem] hover:scale-[1.09] transition-all duration-500'   src={image} alt="immagealt"/>
      <p className='text-center text-[1.5rem]'>{Pname}</p>
      <div className='flex justify-center gap-3'>
        <p className='text-[#3CB815] font-bold text-[1.1rem]'>{DPrice}</p>
        <strike>{Price}</strike>
      </div>
      <div className='flex items-center justify-around '>

        <button className='flex items-center gap-3 justify-center bg-[#FF1700] w-[10rem] p-[0.1rem] rounded-b-[0.5rem] rounded-br-none h-[2rem]'>
        <FaEye className='text-white cursor-pointer '/> 
        <p className='cursor-pointer ease-in duration-500 hover:text-red-500 text-[0.9rem] text-white'>View Details</p>
        </button>
        <button className='flex items-center gap-3  w-[9.9rem] p-[0.1rem] justify-center  bg-[#FFE400] rounded-b-[0.5rem] rounded-bl-none h-[2rem] '>
          <FaShoppingBag className='text-[#06FF00] cursor-pointer'/>
          <p className='text-white duration-500 ease-in cursor-pointer hover:text-red-500'>Add to Cart</p>
        </button>
      </div>
    </div>
  )
}

export default FoodProductCard
