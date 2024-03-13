import React from 'react'

const ProductCard = ({image,text}) => {
  return (
    <div className='flex flex-col items-center justify-center '>
       <img src={image} className='w-[10rem] h-[10rem] object-cover lg:w-[40rem] lg:h-[20rem]' alt="" />
       <p className='text-[1.5rem] font-bold font-mono'>{text}</p>
    </div>
  )
  }

export default ProductCard
