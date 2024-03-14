import React from 'react'
import Review from './Review'
import Team from './Team'
import contact from './assets/img/social.jpg'
import { Link } from 'react-router-dom'
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaQuoteLeft } from "react-icons/fa";
import misson from './assets/img/misson.jpg'
import FoodProduct from './FoodProduct'
const AboutUsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
       <div className='pt-[0.9rem] flex flex-col items-center justify-center gap-[2rem] w-[100vw] p-[2rem]'>
        <h1 className='text-[2rem] font-bold text-green-600 w-fit  border-b border-red-600'>Our Misson</h1>
        <div className='flex lg:flex-row flex-col items-center gap-[1.5rem] '>
             <img src={misson} alt="MissonImage" className='lg:w-[40rem] lg:h-[15rem] object-cover' />
              <div className=' lg:w-[30rem] lg:h-fit p-[0.6rem] relative'>
                <p className='font-medium font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, iure natus, quae sint, molestias vitae nesciunt fugiat praesentium officia ad sequi? Qui expedita dolor repudiandae porro fugit, dolore animi!</p>
                <FaQuoteLeft className='text-[1.7rem] text-[#3CB815] absolute top-[-1rem] left-[-1rem]'/>
              </div>  
            
         </div>
       </div>
      <div className='flex flex-wrap lg:flex-row items-center justify-center  gap-[6rem] rounded-[0.3rem] p-[2rem] pb-[10rem] shadow-[3px_7px_3px_#596d91] w-[100vw]'>
      <div className='flex flex-col lg:flex-row items-center  gap-[5rem] bg-[#EBEAF0] p-[3rem] md:flex-row'>
        <div className='flex flex-col gap-[2rem] items-center w-[20rem]'>
          <div className='flex gap-[0.2rem] items-center'>
          <FiTarget className='text-[2rem] text-red-600 sm:text-[2.5rem]' />   
             <p className='font-bold text-[1.6rem] sm:text-[1.9rem]'>What we do</p>
          </div>
          <div className='md:text-[1rem] text-[1.7rem] font-normal sm:text-[1.9rem]'>
          <p>Lorem ipsum dolor </p>
          <p>Lorem ipsum dolor </p>
          <p>Lorem ipsum dolor </p>
          <p>Lorem ipsum dolor </p>
          <p>Lorem ipsum dolor </p>
          </div>
        </div>        
        <div className='flex flex-col items-center gap-[2rem]  w-[20rem]'>
          <div className='flex items-center gap-[0.2rem]'>
          <TiTick className='text-[2rem] text-blue-500 sm:text-[2.5rem]' />
             <p className='font-bold text-[1.6rem] sm:text-[1.9rem]'>We Are</p>
          </div>
          <div className='md:text-[1rem] text-[1.7rem] font-normal sm:text-[1.9rem]'>
            <p>Lorem ipsum dolor </p>
            <p>Lorem ipsum dolor </p>
            <p>Lorem ipsum dolor </p>
            <p>Lorem ipsum dolor </p>
            <p>Lorem ipsum dolor </p>
          </div>
        </div>
      </div>   
      <div className='flex flex-col items-center gap-[2rem]  w-[20rem]'>
          <div className='flex items-center gap-[0.2rem]'>
            <ImCross className='text-[2rem] text-green-600 sm:text-[2.5rem]'/>
             <p className='font-bold text-[1.6rem] sm:text-[1.9rem] '>We are Not</p>
          </div>
          <div className='md:text-[1rem] text-[1.7rem] font-normal sm:text-[1.9rem]'>
          <p>Lorem ipsum dolor </p>
          <p>Lorem ipsum dolor </p>
          <p>Lorem ipsum dolor </p>
          <p>Lorem ipsum dolor </p>
          <p>Lorem ipsum dolor </p>
          </div>
        </div> 
      </div>
      <Team/>
{/*       
      <div className='pt-[3rem]  items-center justify-center gap-[2rem]'>
         <h1 className='text-[2rem] font-bold font-mono border-b-2 border-red-500 w-fit text-center '>Our Social Media:</h1>
         <div className='flex flex-col items-center justify-center lg:flex-row'>
       
            <img src={contact} alt="Contact" className='lg:w-[32rem] lg:h-[30rem]  object-cover' />
            <div className='flex gap-[2rem] text-[5rem] lg:text-[3rem] flex-wrap ml-[4rem] sm:ml-0'>
              <Link className='rounded-[50%] border border-[#F70481] p-[1rem]'><CiInstagram className='text-[#F70481]'/></Link> 
              <Link className='rounded-[50%] border border-[#1873EB] p-[1rem]'><FaFacebook className='text-[#1873EB]'/></Link>
              <Link className='rounded-[50%] border border-[#1C96E8] p-[1rem]'><CiTwitter className='text-[#1C96E8]' /></Link>
              <Link className='rounded-[50%] border border-[#47c355] p-[1rem]'><FaWhatsapp className='text-[#47C355]' /></Link>
              <Link className='rounded-[50%] border border-[#0C61BF] p-[1rem]'><FaLinkedin className='text-[#0C61BF]' /></Link>
            </div>
        </div>
      </div> */}
      
    </div>
  )
}

export default AboutUsPage
