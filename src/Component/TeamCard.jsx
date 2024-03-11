import React from 'react'
import { Link } from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
const TeamCard = ({image,name,profession}) => {
  return (
    <div className=' w-[19rem] relative sm:w-[28rem] md:border border-green-400 lg:w-[13rem] xl:w-[15rem] '>
       <img src={image} alt="" className='w-fit rounded-[0.5rem] sm:w-[28rem] lg:w-[13rem] xl:w-[15rem]' />
       <div className='  bg-white flex flex-col items-center gap-[0.5rem] w-[12rem] sm:w-[18rem] p-[1.5rem] lg:w-[12rem]  rounded-[0.5rem] absolute bottom-[-3rem] left-[1rem] '>
         <p className='text-[1rem] font-bold text-black' >{name}</p>
         <p className='text-[#4BAF47] text-[1rem] font-semibold'>{profession}</p>
         <div className='flex gap-[1rem] '>
            <Link className='group bg-[#4BAF47] p-[0.4rem] rounded-[50%] border border-[#4BAF47] hover:bg-white'><CiTwitter className='text-white text-[1.4rem] group-hover:text-[#4BAF47] ease-in duration-300' /></Link>
            <Link className='group bg-[#4BAF47] p-[0.4rem] rounded-[50%] border border-[#4BAF47] hover:bg-white'><CiFacebook className='text-white text-[1.4rem] group-hover:text-[#4BAF47] border-none ease-in duration-300' /></Link>
            <Link className='group bg-[#4BAF47] p-[0.4rem] rounded-[50%] border border-[#4BAF47] hover:bg-white'><CiInstagram className='text-white text-[1.4rem] group-hover:text-[#4BAF47] ease-in duration-300'/></Link>
         </div>
       </div>
    </div>
  )
}

export default TeamCard
