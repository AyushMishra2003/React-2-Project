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

const AboutUsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='border border-black w-[100vw] flex items-center justify-center '>
      <div className='flex items-center justify-center border border-green-400 gap-[5rem] '>
        <div>
          <div>
             logo
             <p>We Are</p>
          </div>
          <div>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
          </div>
        </div>        
        <div>
          <div>
             logo
             <p>We Are</p>
          </div>
          <div>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
          </div>
        </div>
      </div>   
      <div>
          <div>
             logo
             <p>We Are</p>
          </div>
          <div>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
            <p>lorem5</p>
          </div>
        </div> 
      </div>
      <div>
       <Review/>
      </div>
      <Team/>
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
      </div>
    </div>
  )
}

export default AboutUsPage
