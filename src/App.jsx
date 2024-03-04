import React from 'react'
import {ReactDOM} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Header from './Component/Header'
const App = () => {
  return (
      <div>
       <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
        </div>
  )
}

export default App
