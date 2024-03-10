import React from 'react'

const OurServcieCard = ({image,heading,text,logo}) => {
  return (
    <div className=' flex flex-col w-[18rem] relative sm:w-[35rem] lg:w-[18rem] items-center xl:w-[20rem] '>
       <div className=' w-[16rem] p-[1rem] rounded-[0.5rem] bg-[#FFFFFFF] absolute top-[-4rem] left-[1.5rem] bg-white hover:bg-[#FF8E00] ease-in duration-500 sm:left-[7rem] lg:left-[1rem]'>
         <p>{text}</p>
         <h1 className='font-bold text-[1.7rem] '>{heading}</h1>
       </div>
       <img src={image} className='w-[18rem] sm:w-[35rem] lg:w-[18rem] xl:w-[22rem]' alt="serviceimg" />
       <div>
        <img className='w-[3rem] border border-black rounded-[50%] absolute bottom-[-2rem] bg-[#000000] right-[50%] shadow-[5px_10px_5px_#1c2121]  '   src={logo} alt="Logo" />
       </div>
    </div>
  )
}

export default OurServcieCard
