import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch,CiUser } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className="navbar bg-[#E1E4EB]">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <GiHamburgerMenu className='text-[1.5rem]'/>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100  w-[20rem] transition-[2s] flex flex-col gap-[2.5rem]  absolute top-[-2rem] left-[-1rem] ">
       <div className='flex justify-center border-b-2'> 
         <img  className='w-[4rem]'  src={logo} alt="ecologo" />
        </div> 
        <div>
        <li ><a className='text-[1.2rem] border-b-1 '>Item 1</a></li>
        <li className='b '>
          <a className='text-[1.2rem] group '>Item 2
          <ul className="hidden p-2 group-hover:text-red-400 group-hover:block">
            <li className='text-[1.2rem]'><a className='text-[1.2rem]'>Sublist 1</a></li>
            <li className='text-[1.2rem]'><a className='text-[1.2rem]'>Sublist 2</a></li>
          </ul>
          </a>
        </li>
        <li><a className='text-[1.2rem]'>Item 3</a></li>
        </div>
      </ul>
    </div>
    {/* <a className="text-xl btn btn-ghost">Organic Food</a> */}
    <img  className='w-[4rem]'  src={logo} alt="ecologo" />
  </div>

  <div className="hidden navbar-center lg:flex ">
    <ul className="px-1 menu menu-horizontal">
      <li><a className='text-[1.5rem]'>Item 1</a></li>
      <li>
        <details>
          <summary className='text-[1.5rem]'>Item2</summary>
          <ul className="p-2 border">
            <li><a>Sublist 1</a></li>
            <li><a>Sublist 2</a></li>
          </ul>
        </details>
      </li>
      <li className='text-[1.5rem]'><a>Item 3</a></li>
    </ul>
  </div>
  {/* ICONS -HEADER */}
  <div className="navbar-end  flex gap-[0.3rem]">
    {/* <a className="btn border border-black p-[0.5rem] px-[0.5rem]">Button</a> */}
    <Link className='p-[0.3rem] rounded-full bg-[#FFFFFF] hover:bg-[#FF1700] ease-in duration-300'><CiSearch className='text-[1.2rem] text-black'/></Link>
    <Link className='p-[0.3rem] rounded-full bg-[#FFFFFF] hover:bg-[#FF1700] ease-in duration-300'><CiUser className='text-[1.2rem]'/></Link>
    <Link className='p-[0.3rem] rounded-full bg-[#FFFFFF] hover:bg-[#FF1700] ease-in duration-300'><FaShoppingBag className='text-[1.2rem]'/></Link>
  </div>
</div>
  )
}

export default Header
