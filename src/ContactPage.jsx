import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
const ContactPage = () => {
  return (
    <div className='bg-[#0B0E11] text-white  w-[100vw] flex flex-col  items-center justify-center pt-[5rem] pb-[0.6rem] '>
        <div className='flex flex-col items-center gap-[4rem] '> 
            <h1 className='text-[2.5rem] font-mono text-center sm:text-[2.8rem] lg:text-[3.5rem] '>Let's have a talk</h1>
            {/* social link */}
            <div className='flex flex-col gap-[0.8rem] lg:flex-row '>
                <div className='flex p-[0.6rem] px-[2.5rem] sm:px-[3rem] lg:px-[2rem] md:px-[4rem]  text-black bg-white items-center  gap-[0.8rem] rounded-[0.2rem]  cursor-pointer shadow-[3px_7px_3px_#596d91]'>
                  <FaPhone className='text-[#1D7F20] text-[1.5rem] lg:text-[0.9rem]' />
                  <p className='text-[1.2rem] font-semibold'>+91 1654327890</p>
                </div>
                <div className='flex p-[0.6rem] px-[2.5rem] sm:px-[3rem] md:px-[4rem] lg:px-[1rem] text-black bg-white items-center  gap-[0.8rem] rounded-[0.2rem] cursor-pointer shadow-[5px_10px_5px_#596d91]'>
                  <MdEmail className='text-[#EA4335]  text-[1.5rem] lg:text-[0.9rem]' />
                  <p className='text-[1.2rem] font-semibold'>info@gmail.com</p>
                </div>
                <div className='flex p-[0.6rem] px-[2.5rem] sm:px-[3rem] md:px-[4rem] lg:px-[1rem] text-black bg-white items-center  gap-[0.8rem] rounded-[0.2rem] cursor-pointer shadow-[5px_10px_5px_#596d91]'>
                   <CiInstagram className='text-[#F500CD] text-[1.5rem] lg:text-[0.9rem]' />
                  <p className='text-[1.2rem] font-semibold'>Insta Username</p>
                </div>
                <div className='flex p-[0.6rem] px-[2.5rem] sm:px-[3rem] md:px-[4rem] lg:px-[1rem] text-black bg-white items-center  gap-[0.8rem] rounded-[0.2rem] cursor-pointer shadow-[5px_10px_5px_#596d91]'>
                  <FaLinkedin className='text-[#3766FF] text-[1.5rem] lg:text-[0.9rem]'/>
                  <p className='text-[1.2rem] font-semibold'>LinkedinName</p>
                </div>
                <div className='flex p-[0.6rem] px-[2.5rem] sm:px-[3rem] md:px-[4rem] lg:px-[1rem] text-black bg-white items-center  gap-[0.8rem] rounded-[0.2rem] cursor-pointer  shadow-[5px_10px_5px_#596d91]'>
                  <CiTwitter className='text-[#1C96E8] text-[1.5rem] lg:text-[0.9rem] xl:text-[1.2rem]' />
                  <p className='text-[1.2rem] font-semibold'>TwitterName</p>
                </div>
            </div>
            {/* FORM */}
            <form className='flex flex-col gap-[1rem] items-center justify-center'>
                <p className='text-[1.5rem] text-center '>Pitch Us</p>
              <div className='border-b-2 border-white'>
                <p>Name</p>
                <input type="text" placeholder='Enter Your Name' className='pr-[7rem] border-none lg:pr-[10rem] xl:pr-[18rem] bg-[#0B0E11] ' />
              </div>
              <div className='border-b-2 border-white'>
                <p>Email Address</p>
                <input type="email" placeholder='Enter Your Email Address' className='pr-[7rem] border-none lg:pr-[10rem] xl:pr-[18rem]  bg-[#0B0E11]' />
              </div>
              <div className='border-b-2 border-white'>
                <p>Phone Number</p>
                <input type="number" placeholder='Enter Your Mobile Number' className='pr-[7rem] border-none lg:pr-[10rem] xl:pr-[18rem]  bg-[#0B0E11]' />
              </div>
              <div className='border-b-2 border-white'>
                <p>Message</p>
                <textarea placeholder='Enter Your Message' className=' w-[18rem] h-[4rem] border-none lg:w-[22rem] bg-[#0B0E11] xl:w-[29rem] resize-none'/>
              </div>
              <button className='rounded-[3rem] px-[8rem] lg:px-[9rem] xl:px-[13rem] border border-black bg-[#F14A0E] text-white p-[0.5rem] hover:bg-white hover:text-black '>SUBMIT</button>
            </form>
            {/* MAP */}
              <div className=''>
                   <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0369724128955!2d82.99323956088575!3d25.26934167757142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3229c5f00e51%3A0x2a17ac9898868786!2sSchool%20of%20Biotechnology%20New%20Building!5e0!3m2!1sen!2sin!4v1711779891268!5m2!1sen!2sin" 
                width="600"
                height="400"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                className='w-[100vw]'
                />

               </div>
            </div>
        </div>
  )
}

export default ContactPage
