import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useReviewData from './Hooks/ReviewData';
import ReviewCard from './Component/ReviewCard';
import OurProduct from './Hooks/OurProduct';
import ProductCard from './Component/ProductCard';
const Review = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed:3000,
        autoplay:true,
        centerMode:true,
        pauseOnDotsHover:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight:true,
        centerPadding:'100px'

      };
  return (
    <div className=' pt-[1rem] w-[100vw] flex flex-col items-center justify-center gap-[3rem] pb-[10rem]'>
      <div className='flex justify-center'>
          <h1 className='text-[2rem] font-bold  text-[#000000] '>Our Product</h1>
       </div>
       <Slider {...settings} className='flex items-center justify-center  w-[100vw] '>
          {/* {useReviewData.map((val,ind)=><ReviewCard   username={val.username} profession={val.profession} review={val.reviewdata} key={ind+1}/>)} */}
          {OurProduct.map((val,ind)=><ProductCard image={val.image} text={val.text} key={ind+1}/>)}
       </Slider>
    </div>
  )
}

export default Review
