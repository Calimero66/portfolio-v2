import React from 'react'
import Nav from './components/Nav'
import Intro from './components/intro'
// import Details from './components/Details'
import Home from './components/Skills'
import Projects from './components/projects'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-700 selection:text-cyan-300' >
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* <div class="flex absolute top-0 -z-10  w-full bg-black min-h-screen ">
          <div class="fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(244,109,109,0.5)] opacity-50 blur-[80px]"></div>
        </div> */}
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>

      </div>
      <div className="flex h-max">
        <Nav />
        <div className="flex-1 lg:ml-36 md:ml-36" >
          <Intro />
          {/* <Details/> */}
          <Home/>
          <Projects/>

        </div>
      </div>
      
    </div>
    
  )
}

export default App
