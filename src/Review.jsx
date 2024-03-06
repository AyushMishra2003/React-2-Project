import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useReviewData from './Hooks/ReviewData';
import ReviewCard from './Component/ReviewCard';
const Review = () => {
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
    <div className=' pt-[1rem] w-[100vw]'>
      <div className='flex justify-center'>
          <h1 className='text-[2rem] font-bold text-center text-[#000000]  border-b-2 border-red-500 w-fit'>Our Review</h1>
       </div>
       <Slider {...settings} className='flex items-center justify-center  w-[70rem] lg:w-[120vw]'>
          {useReviewData.map((val,ind)=><ReviewCard  image={val.image} username={val.username} profession={val.profession} review={val.reviewdata} key={ind+1}/>)}
       </Slider>
    </div>
  )
}

export default Review
