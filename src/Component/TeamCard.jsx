import React from 'react'
import { Link } from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
const TeamCard = ({image,name,profession}) => {
  return (
    <div className=' w-[19rem] relative sm:w-[28rem]  lg:w-[20rem] lg:h-[20rem] xl:w-[20rem]  flex gap-[2rem]'>
       <img src={image} alt="" className='sm:w-[20rem] sm:h-[20rem] w-[12rem] h-[12rem] lg:w-[30rem] lg:h-[20rem]  xl:w-[20rem] xl:h-[20rem] object-cover rounded-[30% 70% 72% 28% / 30% 30% 70% 70%] ' />
       <div className='  bg-[#BFC2B8] flex flex-col w-[10rem] sm:w-[18rem]  lg:w-[18rem]  rounded-[0.5rem] absolute bottom-[2rem] lg:left-[1rem] left-[0.3rem] lg:p-[0.1rem] '>
         <p className='text-[1rem] font-bold text-black' >{name}</p>
         <p className='text-[#4BAF47] text-[1rem] font-semibold'>{profession}</p>
         {/* <div className='flex gap-[1rem] '>
            <Link className='group bg-[#4BAF47] p-[0.4rem] rounded-[50%] border border-[#4BAF47] hover:bg-white'><CiTwitter className='text-white text-[1.4rem] group-hover:text-[#4BAF47] ease-in duration-300' /></Link>
            <Link className='group bg-[#4BAF47] p-[0.4rem] rounded-[50%] border border-[#4BAF47] hover:bg-white'><CiFacebook className='text-white text-[1.4rem] group-hover:text-[#4BAF47] border-none ease-in duration-300' /></Link>
            <Link className='group bg-[#4BAF47] p-[0.4rem] rounded-[50%] border border-[#4BAF47] hover:bg-white'><CiInstagram className='text-white text-[1.4rem] group-hover:text-[#4BAF47] ease-in duration-300'/></Link>
         </div> */}
       </div>
    </div>
  )
}

export default TeamCard
