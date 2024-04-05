import React from 'react'
// "image":img1,
//       "name":"John Singh",
//       "profession":"Worker"
import useTeamData from './Hooks/TeamData'
import TeamCard from './Component/TeamCard'
import { FaAward } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdOutlinePreview } from "react-icons/md";
import Review from './TeamReview';
const Team = () => {
  return (
    <div className='bg-[#24231E] flex  flex-col items-center justify-center gap-[2rem] p-[1rem] '>
        <div>
        <p className='text-[#4BAF47] text-center font-mono text-[1.4rem] lg:text-[1.8rem] '>Our team</p>
        <h1 className='text-white text-[2rem] font-bold'>Our Dedicateds</h1>
        </div>
        <div className='flex flex-col gap-[10rem] lg:flex-row lg:gap-[2rem]  items-center justify-center'>
         {/* {useTeamData.map((val,ind)=><TeamCard image={val.image} name={val.name} profession={val.profession} key={ind+1}/>)} */}
         <Review/>
        </div>
    </div>
  )
}

export default Team
