import React from 'react'
import Cursoles from './Component/Cursoles'


const Review_Page = () => {
  return (
    <div className='p-[1rem] flex flex-col gap-[2rem]'>
       <div className='flex justify-center'>
          <h1 className='text-[2rem] font-bold text-center text-[#000000]  border-b-2 border-red-500 w-fit'>Our Review</h1>
       </div>
       <Cursoles/>
    </div>
  )
}

export default Review_Page
