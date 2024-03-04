import React from 'react'
import Header from './Component/Header'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <div>
      <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 ">
          <h3 class="text-slate-900 group-hover:text-red-400 text-sm font-semibold">New project</h3>
        <p class="text-slate-500 group-hover:text-red-400 text-sm">Create a new project from a variety of starting templates.</p>
     </a>
      </div>
      <div className='group'>
        <a href='#' class=" cursor-pointer">i am pag tag
        <div>
        <h1 class='group-hover:text-red-400 cursor-pointer text-yellow-400'>i am heading</h1>
        </div>
        </a>
      </div>
    </div>
  )
}

export default Home
