import React, { useEffect } from 'react'
import comingSoon from './assets/img/comigsooon.jpg'
const ComingSoon = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='p-[3rem]'>
       <img src={comingSoon} alt="comingSoon" className='w-[60rem] h-[30rem] object-cover rounded-[0.2rem]' />
    </div>
  )
}

export default ComingSoon
