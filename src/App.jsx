import NavBar from './components/navbar'
import Intro from './components/intro'
import Stack from './components/stack'


function App() {


  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-700 selection:text-cyan-300'>
      <div>

      </div>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div class="flex absolute top-0 -z-10  w-full bg-black min-h-screen ">
          <div class="fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(244,109,109,0.5)] opacity-50 blur-[80px]"></div>
        </div>

      </div>
      <div className=' container '>
        <NavBar />
        <div className='mx-auto my-auto text-white'>
          <Intro />
          <Stack />
        </div>

      </div>








      {/* <div class="flex absolute top-0 -z-10  w-full bg-black min-h-screen ">
        <div class="fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(244,109,109,0.5)] opacity-50 blur-[80px]"></div>
        <NavBar />
        <div className='mx-auto my-auto text-white'>
          <Intro />
          <Stack/>
        </div>
      </div> */}



    </div>
  )
}

export default App
