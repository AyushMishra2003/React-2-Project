import React from 'react'
import logo from '../assets/logo.png'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const Footer = () => {
  return (
    <div className='w-[100vw] p-[1.5rem] bg-black text-white flex flex-wrap gap-[4rem] items-center lg:justify-center lg:items-start'>
      {/* LEFT FOOTER */}
      <div className='flex flex-col gap-[1.5rem] '>
        <div>
          <img src={logo} alt="LogoImage" className='w-[4rem]' />
        </div>
        <div className='flex flex-col gap-[2rem] font-thin'>
        <p className='font-light w-[15rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, commodi.</p>
        <div className='flex gap-[0.5rem] '>
        <Link className='w-[2rem] rounded-[50%] '><CiTwitter className='text-[1.5rem] rounded-[50%]'/></Link>
        <Link className='w-[2rem]   rounded-[50%] '><CiFacebook className='text-[1.5rem] rounded-[50%]'/></Link>
        <Link className='w-[2rem]  rounded-[50%] '><FaYoutube className='text-[1.5rem] rounded-[50%]'/></Link>
        <Link className='w-[2rem]  rounded-[50%]'><CiLinkedin className='text-[1.5rem] rounded-[50%]'/></Link>
        </div>
        </div>
      </div> 
      {/* CENTER FOOTER */}
      <div className='flex flex-col
       gap-[3rem] '>
        <h1 className='font-bold text-[1.5rem]  '>Address</h1>
      <div className='flex flex-col gap-1 font-thin'>
        <div className='flex gap-[0.5rem] items-center'>
          <FaLocationDot />
          <p>Varanasi</p>
        </div>
        <div className='flex gap-[0.5rem] items-center'>
        <CiPhone />
        <p>+91 6388291292</p>
        </div>
        <div className='flex gap-[0.5rem] items-center'>
        <MdEmail />
        <p>info@gmail.com</p>
        </div>
      </div>
      </div>
      {/* QUICK LINKS */}
      <div className='flex flex-col gap-[3rem] '>
        <h1 className='font-bold text-[1.5rem]'>Quick Links</h1>
        <div className='flex flex-col gap-1 font-thin'>
        <div className='flex items-center ease-in duration-500   hover:px-[0.6rem] hover:text-red-600'>
        <MdKeyboardArrowRight />
        <p className='font-normal'>About Us</p>
        </div>
        <div className='flex items-center ease-in duration-500 hover:px-[0.6rem] hover:text-red-600'>
        <MdKeyboardArrowRight />
        <p className='font-normal'>Contact Us</p>
        </div>
        <div className='flex items-center ease-in duration-500 hover:px-[0.6rem] hover:text-red-600'>
        <MdKeyboardArrowRight />
        <p className='font-normal'>Our Service</p>
        </div>
        <div className='flex items-center ease-in duration-500 hover:px-[0.6rem] hover:text-red-600'>
        <MdKeyboardArrowRight />
        <p className='font-normal'>Support</p>
        </div>
        </div>
      </div>

      {/* NEWSLETTERS */}
      <div className='flex flex-col gap-[3rem]'>
        <h1 className='text-[1.5rem] font-bold'>NewsLetter</h1>
        <div className='relative font-thin'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <input type="text" placeholder='Your mail' className='p-[0.4rem] px-[1rem] bg-black border'/>
        <button className='p-[0.4rem] px-[1rem] bg-[#06FF00] border absolute left-[7.8rem]'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
