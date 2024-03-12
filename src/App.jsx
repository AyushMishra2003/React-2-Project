import React from 'react'
import {ReactDOM} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ContactPage from './ContactPage'
const App = () => {
  return (
      <div className='flex flex-col items-center overflow-x-hidden'>
       <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
        </div>
  )
}

export default App
