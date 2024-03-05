import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const FoodProductCard = ({image,Pname,Price,DPrice}) => {
  return (
    <div className='w-[17rem] flex flex-col items-center justify-center  md shadow-[5px_10px_5px_#878386] p-[0.5rem] rounded-[0.5rem] gap-[0.5rem]'>
      <img className='w-[15rem]  h-[10rem] hover:scale-[1.09] transition-all duration-500'   src={image} alt="immagealt"/>
      <p className='text-center text-[1.5rem]'>{Pname}</p>
      <div className='flex justify-center gap-3'>
        <p className='text-[#3CB815] font-bold text-[1.1rem]'>{DPrice}</p>
        <strike>{Price}</strike>
      </div>
      <div className='flex  justify-around items-center gap-4 '>

        <button className='flex items-center gap-3 rounded-[0.5rem] bg-red-400 px-[0.4rem] p-[0.3rem] '>
        <FaEye className='cursor-pointer text-[#3CB815]'/> 
        <p className='cursor-pointer ease-in duration-500 hover:text-red-500 text-[0.9rem]'>View Details</p>
        </button>
        <button className='flex items-center gap-3 rounded-[0.5rem]'>
          <FaShoppingBag className='cursor-pointer text-[#3CB815]'/>
          <p className='cursor-pointer ease-in duration-500  hover:text-red-500 '>Add to Cart</p>
        </button>
      </div>
    </div>
  )
}

export default FoodProductCard
