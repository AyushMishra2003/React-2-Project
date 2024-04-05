import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useReviewData from './Hooks/ReviewData';
import ReviewCard from './Component/ReviewCard';
import OurProduct from './Hooks/OurProduct';
import ProductCard from './Component/ProductCard';
import useTeamData from './Hooks/TeamData';
import TeamCard from './Component/TeamCard';
const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed:3000,
        autoplay:true,
        centerMode:true,
        pauseOnDotsHover:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // adaptiveHeight:true,
        // centerPadding:'100px',
        responsive: [
          {
            breakpoint: 1075,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              centerMode:true,
              // dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite:true
              // initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite:true
            }
          },
    ]
   };
  return (
    <div className='w-[100vw] flex flex-col items-center justify-center gap-[3rem] pb-[2rem] '>
       <Slider {...settings} className='flex items-center justify-center  w-[50rem]  sm:w-[70rem]'>
           {useTeamData.map((val,ind)=><TeamCard image={val.image} name={val.name} profession={val.profession} key={ind+1}/>)}
       </Slider>
    </div>
  )
}

export default Review
