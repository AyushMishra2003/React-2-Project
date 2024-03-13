import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const Cursoles = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed:3000,
        autoplay:true,
        centerMode:true,
        pauseOnDotsHover:true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight:true,
        centerPadding:'100px',

      };
  return ( 
    <Slider {...settings} className='flex items-center justify-center border p-[1rem]'>
      <div className='flex flex-col items-center justify-center rounded-[2rem] relative p-[0.5rem] '>
        <div className='flex flex-col border-x-4 border-y-4  border-[#7B7263]  w-[22rem] p-[1.5rem] gap-[1rem] rounded-[2rem] shadow-[5px_10px_5px_#1c2121]  '>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum dolor sunt eligendi praesentium quo.</div>
             <div className='flex items-center gap-[1rem]'>
                <div className='border border-[#C6CA53] w-[5rem] h-[5rem] rounded-[50%] bg-[#C6CA53]'>
               
                </div>
                <div>
                   <h1 className='font-bold text-[1.5rem]'>User name</h1>
                   <h1 className='font-semibold text-[1rem]'>Profession</h1>
                </div>
             </div>
        </div>
        <FaQuoteLeft className='absolute top-[-0.2rem] text-[2rem] text-[#3CB815]'/>
      </div>
      <div className='flex flex-col items-center justify-center rounded-[2rem] relative p-[0.5rem] '>
        <div className='flex flex-col border-x-4 border-y-4  border-[#7B7263]  w-[22rem] p-[1.5rem] gap-[1rem] rounded-[2rem] shadow-[5px_10px_5px_#1c2121]  '>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum dolor sunt eligendi praesentium quo.</div>
             <div className='flex items-center gap-[1rem]'>
                <div className='border border-[#C6CA53] w-[5rem] h-[5rem] rounded-[50%] bg-[#C6CA53]'>
                </div>
                <div>
                   <h1 className='font-bold text-[1.5rem]'>User name</h1>
                   <h1 className='font-semibold text-[1rem]'>Profession</h1>
                </div>
             </div>
        </div>
        <FaQuoteLeft className='absolute top-[-0.2rem] text-[2rem] text-[#3CB815]'/>
      </div>
      <div className='flex flex-col items-center justify-center rounded-[2rem] relative p-[0.5rem] '>
        <div className='flex flex-col border-x-4 border-y-4  border-[#7B7263]  w-[22rem] p-[1.5rem] gap-[1rem] rounded-[2rem] shadow-[5px_10px_5px_#1c2121]  '>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum dolor sunt eligendi praesentium quo.</div>
             <div className='flex items-center gap-[1rem]'>
                <div className='border border-[#C6CA53] w-[5rem] h-[5rem] rounded-[50%] bg-[#C6CA53]'>
                </div>
                <div>
                   <h1 className='font-bold text-[1.5rem]'>User name</h1>
                   <h1 className='font-semibold text-[1rem]'>Profession</h1>
                </div>
             </div>
        </div>
        <FaQuoteLeft className='absolute top-[-0.2rem] text-[2rem] text-[#3CB815]'/>
      </div>
      <div className='flex flex-col items-center justify-center rounded-[2rem] relative p-[0.5rem] '>
        <div className='flex flex-col border-x-4 border-y-4  border-[#7B7263]  w-[22rem] p-[1.5rem] gap-[1rem] rounded-[2rem] shadow-[5px_10px_5px_#1c2121]  '>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum dolor sunt eligendi praesentium quo.</div>
             <div className='flex items-center gap-[1rem]'>
                <div className='border border-[#C6CA53] w-[5rem] h-[5rem] rounded-[50%] bg-[#C6CA53]'>
                   <img className='w-[5rem] h-[5rem] rounded-[100%]' src={user4} alt="" /> 
                </div>
                <div>
                   <h1 className='font-bold text-[1.5rem]'>User name</h1>
                   <h1 className='font-semibold text-[1rem]'>Profession</h1>
                </div>
             </div>
        </div>
        <FaQuoteLeft className='absolute top-[-0.2rem] text-[2rem] text-[#3CB815]'/>
      </div>
      <div className='flex flex-col items-center justify-center rounded-[2rem] relative p-[0.5rem] '>
        <div className='flex flex-col border-x-4 border-y-4  border-[#7B7263]  w-[22rem] p-[1.5rem] gap-[1rem] rounded-[2rem] shadow-[5px_10px_5px_#1c2121]  '>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum dolor sunt eligendi praesentium quo.</div>
             <div className='flex items-center gap-[1rem]'>
                <div className='border border-[#C6CA53] w-[5rem] h-[5rem] rounded-[50%] bg-[#C6CA53]'>
                   <img className='w-[5rem] h-[5rem] rounded-[100%]' src={user5} alt="" /> 
                </div>
                <div>
                   <h1 className='font-bold text-[1.5rem]'>User name</h1>
                   <h1 className='font-semibold text-[1rem]'>Profession</h1>
                </div>
             </div>
        </div>
        <FaQuoteLeft className='absolute top-[-0.2rem] text-[2rem] text-[#3CB815]'/>
      </div>
      <div className='flex flex-col items-center justify-center rounded-[2rem] relative p-[0.5rem] '>
        <div className='flex flex-col border-x-4 border-y-4  border-[#7B7263]  w-[22rem] p-[1.5rem] gap-[1rem] rounded-[2rem] shadow-[5px_10px_5px_#1c2121]  '>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum dolor sunt eligendi praesentium quo.</div>
             <div className='flex items-center gap-[1rem]'>
                <div className='border border-[#C6CA53] w-[5rem] h-[5rem] rounded-[50%] bg-[#C6CA53]'>
                   <img className='w-[5rem] h-[5rem] rounded-[100%]' src={user6} alt="" /> 
                </div>
                <div>
                   <h1 className='font-bold text-[1.5rem]'>User name</h1>
                   <h1 className='font-semibold text-[1rem]'>Profession</h1>
                </div>
             </div>
        </div>
        <FaQuoteLeft className='absolute top-[-0.2rem] text-[2rem] text-[#3CB815]'/>
      </div>
    </Slider>
  )
}

export default Cursoles
