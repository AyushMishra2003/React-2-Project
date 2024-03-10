import React from 'react'

const GalleryCard = ({image}) => {
  return (
    <div className='w-[18rem] sm:w-[32rem] md:w-[30rem] lg:w-[18rem]  xl:w-[21rem]'>
      <img src={image} className='rounded-[1rem] hover:scale-y-110 w-fit' alt="image" />
    </div>
  )
}

export default GalleryCard
