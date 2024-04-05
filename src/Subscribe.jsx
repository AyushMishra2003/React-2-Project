import React from 'react'

const Subscribe = () => {
  return (
    <div className=' bg-[#0C0E2B] w-[100vw] text-white p-[1rem] flex flex-col gap-[2rem] md:flex-row md:items-center  md:p-[2.5rem] border-b-2 border border-black lg:flex lg:flex-row lg:gap-[10rem] xl:justify-center'>
       <div className='lg:w-[25rem] xl:w-[40rem]  flex flex-col gap-[0.8rem]'>
         <p className='text-[2.5rem] md:text-[1.5rem] lg:text-[2.5rem] xl:text-[2.8rem] font-bold xl:font-semi-bold'>Still You need our  <span className='text-[#5B31EE]'>Support</span>?</p>
         <p className='font-light'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
       </div>
      
       <div className='relative '>
         <input type="email" placeholder='Enter your email address'  className='p-[1rem] rounded-[0.4rem] px-[20rem] md:px-[5rem] '/>
         <button className='p-[1rem] bg-[#5B31EE] rounded-[0.3rem] absolute top-0 bottom-0 right-[-2rem]'>Subscribe Now</button>
       </div>

    </div>
  )
}

export default Subscribe
