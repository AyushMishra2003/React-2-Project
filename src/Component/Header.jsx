import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch,CiUser } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../assets/img/eflogo1.png'
const Header = () => {
  return (
    <div className="text-green-500 bg-black navbar">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <GiHamburgerMenu className='text-[1.5rem]'/>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow  w-[100vw] transition-[2s] flex flex-col items-center gap-[2.5rem]  absolute top-[-2rem] left-[-1rem]  bg-black ">
       <div className='flex justify-center items-center gap-[2rem] '> 
         <img  className='w-[4rem]'  src={logo} alt="ecologo" />
         <p className='text-[1.6rem] font-a'>Environmental Food Pvt Ltd</p>
        </div> 
        <div className='w-[100vw] flex flex-col items-center justify-center gap-3'>
        <li className='border-t border-white w-[100vw] items-center'><a className='text-[1.2rem]  border-b-1 '>Home</a></li>
        <li className='border-t border-white w-[100vw] items-center'>
        <details className='w-[15rem] flex flex-col items-center border-t border-white'>
          <summary className='text-[1rem] text-[#08A05E] p-[0.2rem] px-[2rem] border border-white'>What We Do</summary>
          <ul className="p-2 flex flex-col ">
            <li><a className='text-[1.2rem] text-[#08A05E]'>Food Development</a></li>
            <li><a className='text-[1.2rem] text-[#08A05E]'>Food Manufacturing</a></li>
            <li><a className='text-[1.2rem] text-[#08A05E]'>Sea Food Development</a></li>
            <li><a className='text-[1.2rem] text-[#08A05E]'>Nutrition Intelligence</a></li>
          </ul>
        </details>
      </li>
        <li className='border-t border-white w-[100vw] items-center'><a className='text-[1.2rem]'>Contact Us</a></li>
        <li className='border-t border-white w-[100vw] items-center'><a className='text-[1.2rem]'>About Us</a></li>
        <li className='border-t border-white w-[100vw] items-center'><a className='text-[1.2rem]'>Application</a></li>
        <li className='border-t border-white w-[100vw] items-center'><a className='text-[1.2rem]'>Industry</a></li>
        <li className='border-t border-white w-[100vw] items-center'><a className='text-[1.2rem]'>Insight</a></li>
        </div>
      </ul>
    </div>
       <div className="border border-white rounded-md flex items-center justify-center gap-3 p-2">
         <img  className='w-[4rem]'  src={logo} alt="ecologo" />
        <p className='text-[2rem] hidden lg:block font-curve font-bold' >Environmental Food Pvt Ltd</p>
       </div>
  </div>

  <div className="hidden navbar-center lg:flex ">
    <ul className="px-1 menu menu-horizontal">
    <Link to={"/"}><li><a className='text-[1rem] '>Home</a></li></Link>
      <li>
        <details>
          <summary className='text-[1rem] text-[#08A05E]'>What We Do</summary>
          <ul className="p-2  w-[20rem] flex flex-col items-center justify-center bg-[#d1d1d1]">
            <li><a className='text-[1.2rem] text-[#08A05E]'>Food Development</a></li>
            <li><a className='text-[1.2rem] text-[#08A05E]'>Food Manufacturing</a></li>
            <li><a className='text-[1.2rem] text-[#08A05E]'>Sea Food Development</a></li>
            <li><a className='text-[1.2rem] text-[#08A05E]'>Nutrition Intelligence</a></li>
          </ul>
        </details>
      </li>
      <Link to={"/Contact"}><li className='text-[1rem]'><a>Contact Us</a></li></Link>
      <Link to={"/About"}><li className='text-[1rem]'><a>About Us</a></li></Link>
      <Link to={"/"}><li className='text-[1rem]'><a>Application</a></li></Link>
      {/* <Link to={"/"}><li className='text-[1rem]'><a>CRO LABS</a></li></Link> */}
    </ul>
  </div>
  {/* ICONS -HEADER */}
  <div className="navbar-end  flex gap-[0.3rem]">
    {/* <a className="btn border border-black p-[0.5rem] px-[0.5rem]">Button</a> */}
    <Link to={"https://www.facebook.com/envirfoods/"}  target='blank' className='p-[0.3rem] rounded-full bg-[#FFFFFF] hover:bg-[#FF1700] ease-in duration-300'><FaFacebook className='text-[1.5rem]' /></Link>
    <Link className='p-[0.3rem] rounded-full bg-[#FFFFFF] hover:bg-[#FF1700] ease-in duration-300'><CiInstagram className='text-[1.5rem] text-[#A9379D]'/></Link>
    <Link className='p-[0.3rem] rounded-full bg-[#FFFFFF] hover:bg-[#FF1700] ease-in duration-300'><CiTwitter className='text-[1.5rem] text-[#1C96E8]' /></Link>
  </div>
</div>
  )
}

export default Header