import React from 'react'
import {ReactDOM} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
const App = () => {
  return (
      <div className='flex flex-col items-center overflow-x-hidden'>
       <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
        </div>
  )
}

export default App
