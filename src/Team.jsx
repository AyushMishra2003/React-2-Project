import React from 'react'
// "image":img1,
//       "name":"John Singh",
//       "profession":"Worker"
import useTeamData from './Hooks/TeamData'
import TeamCard from './Component/TeamCard'
import { FaAward } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdOutlinePreview } from "react-icons/md";
const Team = () => {
  return (
    <div className='bg-[#24231E] flex flex-col
     items-center justify-center p-[2.5rem] pt-[43rem] sm:pt-[35rem] gap-[2rem] sm:pb-[4rem]  relative lg:pt-[9rem]'>
        <div className='text-black flex flex-col items-center bg-[#F8F7F0] p-[1.5rem] gap-[2rem] top-[-10rem] absolute w-fit rounded-[0.5rem]  sm:top-[-8rem] lg:w-[60rem] lg:flex-row xl:w-[68rem] '>
            <div className='flex gap-[2rem] w-[18rem] sm:w-[32rem] lg:w-[17rem] items-start'>
                <FaAward className='text-[10rem]  text-[#4BAF47] ' />
                <div className='flex flex-col gap-[0.5rem]'>
                   <p className='text-[3rem] text-[#4BAF47] font-bold'>200+</p>
                   <p className='text-[1.3rem] font-bold border-b-2 border-[#4BAF47]'>Winning Awards</p>
                   <p>Lorem Ipsum is simply is dumi omy iois text Loremo Ipsum is simiply is out nho our o dummy text.</p>
                </div>
            </div>
            <div className='flex  gap-[2rem] w-[18rem] items-start sm:w-[32rem] lg:w-[17rem]'>
              <GoProject className='text-[10rem]   text-[#4BAF47]' />
              <div className='flex flex-col gap-[0.5rem]'>
                   <p className='text-[3rem] text-[#4BAF47] font-bold'>200+</p>
                   <p className='text-[1.3rem] font-bold border-b-2 border-[#4BAF47]'>Completed Project</p>
                   <p>Lorem Ipsum is simply is dumi omy iois text Loremo Ipsum is simiply is out nho our o dummy text.</p>
                </div>
            </div>
            <div className='flex  gap-[2rem] w-[18rem] items-start sm:w-[32rem] lg:w-[17rem]'>
               <MdOutlinePreview className='text-[10rem]  text-[#4BAF47]'  />
               <div className='flex flex-col gap-[0.5rem]'>
                   <p className='text-[3rem] text-[#4BAF47] font-bold'>200+</p>
                   <p className='text-[1.3rem] font-bold border-b-2 border-[#4BAF47]'>Client Review</p>
                   <p>Lorem Ipsum is simply is dumi omy iois text Loremo Ipsum is simiply is out nho our o dummy text.</p>
                </div>
            </div>
        </div>
        <div>
        <p className='text-[#4BAF47] text-center font-mono text-[1.4rem] lg:text-[1.8rem] '>Our team</p>
        <h1 className='text-white text-[2rem] font-bold'>Our Dedicateds</h1>
        </div>
        <div className='flex flex-col gap-[4rem] lg:flex-row lg:gap-[2rem]'>
         {useTeamData.map((val,ind)=><TeamCard image={val.image} name={val.name} profession={val.profession} key={ind+1}/>)}
        </div>
    </div>
  )
}

export default Team
