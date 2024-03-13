import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const ReviewCard = ({username,review,profession}) => {
  return (
     <div className='flex flex-col items-center  rounded-[2rem] relative p-[0.5rem]   w-fit  '>
          <div className='flex flex-col border-x-4 border-y-4  border-[#7B7263]  w-[13rem] lg:w-[20rem] p-[1.5rem] gap-[1rem] rounded-[2rem] shadow-[5px_10px_5px_#1c2121]  '>
             <p className='w-[10rem]'>{review}</p>
             <div className='flex items-center gap-[1rem]'>
                <div className='border border-[#FFE400] w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] rounded-[50%] bg-[#C6CA53]'>
                   {/* <img className='w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] rounded-[100%]' src={image} alt="" />  */}
                   <h1>i am review</h1>
                </div>
                <div>
                   <h1 className='font-bold text-[0.9rem]  lg:text-[1.5rem]'>{username}</h1>
                   <h1 className='font-semibold text-[1rem]'>{profession}</h1>
                </div>
             </div>
        <FaQuoteLeft className='absolute top-[-0.2rem] text-[2rem] text-[#3CB815]'/>
      </div>
      </div>
  )
}

export default ReviewCard