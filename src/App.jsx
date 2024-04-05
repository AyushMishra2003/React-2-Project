import React, { useEffect } from 'react'
import {ReactDOM} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ContactPage from './ContactPage'
import Kambucha from './Kambucha'
import AboutUsPage from './AboutUsPage'
import ComingSoon from './ComingSoon'
// import ScrollToTop from '.'
const App = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
      <div className='flex flex-col items-center overflow-x-hidden'>
       <Header/> 
      <Routes>
        <Route path='/React-2-Project' element={<Home/>}/>
        <Route path='/React-2-Project/contact' element={<ContactPage/>}/>
        <Route path='/React-2-Project/Kambucha' element={<Kambucha/>}/>
        <Route path='/React-2-Project/About' element={<AboutUsPage/>}/>
        <Route path='/React-2-Project/coming' element={<ComingSoon/>}/>
        </Routes>
        <Footer/>
        </div>
  )
}

export default App
