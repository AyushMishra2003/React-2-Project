import React from 'react'
import useBlogData from './Hooks/BlogData'
import BlogCard from './Component/BlogCard'
import useBlogData1 from './Hooks/BlogData1'
const Blog = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[3rem] gap-3 p-[0.5rem] '>
        <div>
            <h1 className='text-center text-[2rem] font-bold text-[#000000] border-b-2 border-[#FF1700]'>Our Blog</h1>
        </div> 
        <div className='flex flex-wrap justify-center gap-3 lg:gap-[4rem] '>
          {useBlogData.map((val,ind)=><BlogCard image={val.image} content={val.text} key={ind+1}/>)}
       </div>
    </div>
  )
}

export default Blog
