import React from 'react'
import useFoodProduct from './Hooks/OurFoodProduct'
import FoodProductCard from './Component/FoodProductCard'
const FoodProduct = () => {
  return ( 
    <div className='flex flex-col items-center justify-center gap-[2rem]'>
      <div>
        <p className='text-[2rem] font-bold border-b-2 border-red-500'>Our Product</p>
      </div>
      <div className='flex flex-wrap justify-center gap-1'>
        {useFoodProduct.map((val,ind)=><FoodProductCard image={val.img} Pname={val.Pname} Price={val.Price} DPrice={val.DPrice}/>)}
      </div>
      <button className='p-[0.8rem] px-[2rem]  rounded-[0.5rem] bg-[#3CB815] text-white'>Browse More Product</button>
    </div>
  )
}

export default FoodProduct
