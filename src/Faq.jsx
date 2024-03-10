import React, { useState } from 'react'
import Image from './assets/img/labphoto.webp'
import { FaCirclePlus } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import useFaqData from './Hooks/FaqData';
const Faq = () => {
    const [iconState,setIconState]=useState(true)
    const iconChange=()=>{
        iconState?setIconState(false):setIconState(true)
    }
  return (
    <div className='flex items-center justify-center border border-red-400'>
      <div>
        <img src={Image} className='w-[30rem] h-[30rem]'  alt="" />
      </div> 
      <div className='bg-[#F8F7F0] flex flex-col gap-4 overflow-hidden '>
        <div>
           <p className='text-[#5BAF47] text-[2rem] font-mono'>FAQ</p>
           <h1 className='font-bold text-[3rem] w-[30rem]'>Do You have any question please?</h1>
           <p className='text-[1rem] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quia?</p>
        </div>
         <div className='border border-red-400 p-[10rem] relative' >
            <div className='flex items-center gap-[2rem]'>
              <p className='text-[1rem]'>{useFaqData[0].question}</p>
               <div  onClick={iconChange}> 
                 {iconState?<FaCirclePlus />:<CiCircleMinus />}
               </div>
            </div>
            <div className={`${iconState?"top-[10rem] w-[10rem]":"top-[2rem] w-[3rem]"} absolute`}>
              <p>{useFaqData[0].answer}</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Faq