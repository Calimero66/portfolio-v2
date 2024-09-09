import React from 'react'
import Nav from './components/Nav'
import Intro from './components/intro'
// import Details from './components/Details'
import Home from './components/Skills'
import Projects from './components/projects'
import Footer from './components/footer'
import Contact from './components/contact'

function App() {
  return (
    <div className='overflow-x-hidden text-[#d4d4d4] antialiased selection:bg-cyan-700 selection:text-cyan-300' >
      <div className='fixed top-0 -z-50 h-full w-full'>
        <div class="relative h-full w-full bg-[#020617]">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>
      <div className="flex h-full overflow-auto">
        <Nav />
        <div className="flex-1 lg:ml-36 md:ml-36" >
          <Intro />
          <Projects/>
          <Home/>
          <Contact />
          <Footer />

        </div>
      </div>
      
    </div>
    
  )
}

export default App
