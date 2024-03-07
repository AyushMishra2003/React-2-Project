import React from 'react'

const useFeaturesCard = ({icon,text,content}) => {
  return (
    <div className='group  flex flex-col items-center justify-center border rounded-md shadow-[5px_10px_5px_#736e6e] p-[1rem] gap-3 md:w-[20rem]  bg-[#FFFFFF] hover:bg-[#2a3c7a] hover:text-white ease-in duration-500 lg:w-[18rem] xl:w-[22rem]'>
      <div className='rounded-[10rem] border-[#736e6e] w-[8rem]'> 
      <img className=' rounded-[10rem] border border-[#8a1db3] shadow-[3px_7px_3px_#8a1db3] w-[6rem] h-[6rem]' src={icon} alt="icon" />
      </div>
      <h1 className='font-bold text-[1.5rem] '>{text}</h1>
      <p>{content}</p>
      <button className='p-[0.5rem] group-hover:text-white px-[2rem] border border-[#06FF00] rounded-[10rem] hover:bg-[#06FF00] hover:text-white  text-black ease-in duration-1000'>Read More</button>
    </div>
  )
}

export default useFeaturesCard
