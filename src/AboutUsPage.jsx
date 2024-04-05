import React, { useEffect } from 'react'
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
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='flex flex-col items-center justify-center'>
       <div className='pt-[0.9rem] flex flex-col items-center justify-center gap-[2rem] w-[100vw] p-[2rem]'>
        <h1 className='text-[2rem] font-bold text-green-600 w-fit  border-b border-red-600'>Our Misson</h1>
        <div className='flex lg:flex-row flex-col items-center gap-[1.5rem] '>
             <img src={misson} alt="MissonImage" className='lg:w-[40rem] lg:h-[15rem] object-cover' />
              <div className=' lg:w-[30rem] lg:h-fit p-[0.6rem] relative'>
                <p className='font-serif font-medium'>Our vision is a world where food production is harmonized with nature, where every meal nourishes both body and planet. We envision a future where agricultural practices minimize environmental impact, preserve biodiversity, and mitigate climate change, while also ensuring food security and promoting human well-being.</p>
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
          <p>Sustainable Agriculture </p>
          <p>Nutrition and Health</p>
          <p>Climate Resilience</p>
          <p>Food Systems Innovation</p>
          </div>
        </div>        
        <div className='flex flex-col items-center gap-[2rem]  w-[20rem]'>
          <div className='flex items-center gap-[0.2rem]'>
          <TiTick className='text-[2rem] text-blue-500 sm:text-[2.5rem]' />
             <p className='font-bold text-[1.6rem] sm:text-[1.9rem]'>We Are</p>
          </div>
          <div className='md:text-[1rem] text-[1.7rem] font-normal sm:text-[1.9rem]'>
            <p>Food Safety and Regulation:</p>
            <p>Medical Research: </p>
            <p>Primary Agricultural Production</p>
            <p>Legal and Policy Analysis</p>
          </div>
        </div>
      </div>   
      <div className='flex flex-col items-center gap-[2rem]  w-[20rem]'>
          <div className='flex items-center gap-[0.2rem]'>
            <ImCross className='text-[2rem] text-red-600 sm:text-[2.5rem]'/>
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
      
    </div>
  )
}

export default AboutUsPage
