import React from 'react'
import useGalleyData from './Hooks/Gallerydata'
import GalleryCard from './Component/GalleryCard'
const Gallery = () => {
  return (
    <div className='flex flex-col gap-[4rem] items-center pt-[4rem] '>
      <div className=''>
        <p className='text-[#73AF47] text-[1.5rem] font-mono'>Gallery</p>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-[18rem] xl:gap-[26rem] '>
           <h1 className=' text-[2rem]  font-bold w-[18rem]  md:text-red-500 sm:w-[32rem] lg:w-[33rem] '>Our Professionals Gallery Research institute</h1>
           <button className='w-fit h-[3rem] px-[0.5rem] rounded-[0.5rem] bg-[#4BAF47] text-white border  border-[#4BAF47] hover:bg-white hover:text-black ease-in duration-500'>Discover More</button>
        </div>
        </div>
        <div className='flex flex-col  gap-[2rem] w-fit lg:flex-row '>
            {useGalleyData.map((val,ind)=><GalleryCard image={val.image} key={ind+1}/>)}
        </div>
      </div>
  )
}

export default Gallery
