import React from 'react'

const BlogCard = ({image,content}) => {
  return (
    <div className='flex flex-col w-[18rem]  gap-3  border lg:w-[18rem] xl:w-[22rem]  bg-[#0F131C] '>
       <div>
        <img  className='w-fit' src={image} alt="" />
       </div>
       <p className='text-[1rem]  text-white font-bold hover:text-[#06FF00] ease-in duration-300'>{content}</p>
       <button className='p-[0.5rem] px-[1rem] text-white  border border-[#06ff00] rounded-[0.5rem] hover:bg-[#06ff00] ease-in duration-500 w-fit '>Read More</button>
    </div>
  )
}

export default BlogCard
