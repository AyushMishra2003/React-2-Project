import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from './assets/img/blog_1.png'
import blog2 from './assets/img/blog_2.png'
import blog3 from './assets/img/blog_3.png'
import bloguser from './assets/img/blog_user1.png'
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci"
import { CiTwitter } from "react-icons/ci";

const BlogPage = () => {
  return (
    <div className='flex flex-col items-center justify-center xl:p-[2rem] p-[0.6rem]  gap-[2.8rem]'>
      <div className='text-white flex flex-col items-center gap-[1rem]'>
          <button className='p-[0.1rem] px-[1.3rem] rounded-[2rem] bg-white text-[#5B31EE] font-semibold'>News & Blogs</button>
          <h1 className='xl:text-[2.5rem] text-[1.6rem] font-semibold'>Leatest News & Blog</h1>
      </div>
      <div className='flex  lg:flex-row xl:gap-[2rem] flex-col border border-black gap-[1rem]'>
          <div className='text-white  flex flex-col  gap-[2rem] relative xl:w-[48rem] lg:w-[40rem]'>
              <img src={blog1} alt="blog1" />
              <div className='bg-[#0C0E2C] xl:p-[1rem] xl:pl-[2rem] flex flex-col gap-[1.4rem]'>
              <h1 className='xl:text-[2rem] font-bold lg:text-[2rem]'>It is a long established fact that a reader will be Standard Part</h1>
              <p className='font-medium'>A wonderful serenity has taken possssion of my entire souing like these sweet morning spring whch enjoy with my whole heart I am alone, and feel the charm of existenceths spot whch was create For the bliss of souls like mineing am so happy my dear frend so absori bed in the exquste sens of mere. A wonderful serenity has taken posseson of my entire soung like these sweet mornngs spring whch enjoy …</p>
              <div className='flex items-center lg:gap-[20rem]'>
                <div className='flex items-center xl:gap-[1.6rem] gap-[0.5rem] '>
                  <img src={bloguser} alt="" />
                  <p className='xl:text-[1.1rem]  text-[1rem] font-normal'>By: Mirnsdo Jons</p>
                </div>
                <div className='flex xl:flex-row items-center xl:gap-[0.2rem]'>
                  <Link className='xl:p-[0.6rem] p-[0.3rem] border border-[#8E8E8E] rounded-[0.3rem]'><CiFacebook className='text-[1.2rem] hover:text-[#8E8E8E]' /></Link>
                  <Link className='xl:p-[0.6rem] p-[0.3rem] border border-[#8E8E8E] rounded-[0.3rem]'><FaYoutube className='text-[1.2rem] hover:text-[#8E8E8E]'  /></Link>
                  <Link className='xl:p-[0.6rem] p-[0.3rem]   border border-[#8E8E8E] rounded-[0.3rem]'><CiInstagram className='text-[1.2rem] hover:text-[#8E8E8E]'   /></Link>
                   <Link className='xl:p-[0.6rem] p-[0.3rem]   border border-[#8E8E8E] rounded-[0.3rem]'><CiTwitter className='text-[1.2rem] hover:text-[#8E8E8E]'  /></Link> 
                </div>
              </div>
              </div>
              <div className='flex flex-col px-[1.8rem] rounded-[0.4rem]  bg-[#5B31EE] font-medium text-[1.3rem] absolute top-[0.3rem] xl:left-[1.6rem] leading-[1.6rem] items-center justify-center py-[0.3rem] left-[0.2rem] '>
                  <p>20</p>
                  <p>OCT</p>
              </div>
          </div>
           
          <div className='flex flex-col text-white '>
                <div className='xl:w-[25rem] xl:p-[1rem] flex flex-col gap-[0.6rem] relative bg-[#0c0e2c] lg:w-[22rem] '>
                   <img src={blog2} alt="blog3" />
                   <div className='xl:p-[1rem] p-[0.8rem]'>
                    <h1 className='text-[1.7rem] font-bold hover:text-[#5B31EE] cursor-pointer ease-in duration-500 leading-[2rem]'>It is a long established fact that a reader will be Standard Part</h1>
                  </div>
                  <div className='flex flex-col px-[1.5rem] rounded-[0.4rem] leading-[1.6rem] bg-[#5B31EE] font-medium text-[1.3rem] absolute top-[2rem] xl:left-[1.8rem] left-[0.6rem] items-center justify-center py-[0.3rem]'>
                      <p>20</p>
                      <p>OCT</p>
                 </div>
                </div> 
                <div className='xl:w-[25rem] xl:p-[1rem] flex flex-col gap-[0.6rem] relative bg-[#0c0e2c] lg:w-[22rem]'>
                   <img src={blog3} alt="blog3" />
                   <div className='xl:p-[1rem] p-[0.8rem]'>
                    <h1 className='text-[1.7rem] font-bold hover:text-[#5B31EE] cursor-pointer ease-in duration-500 leading-[2rem]'>It is a long established fact that a reader will be Standard Part</h1>
                  </div>
                  <div className='flex flex-col px-[1.5rem] rounded-[0.4rem]  leading-[1.6rem] bg-[#5B31EE] font-medium text-[1.3rem] absolute top-[2rem] xl:left-[1.8rem] left-[0.6rem] text-center justify-center py-[0.3rem]'>
                      <p>20</p>
                      <p>OCT</p>
                 </div>
                </div> 
           </div> 
      </div>

    </div>
  )
}

export default BlogPage

