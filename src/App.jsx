import NavBar from './components/navbar'
import Intro from './components/intro'

function App() {


  return (
    <>
      <div class="flex absolute top-0 -z-10 h-full w-full bg-black min-h-screen ">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(244,109,109,0.5)] opacity-50 blur-[80px]"></div>
        <NavBar />
        <Intro />
      </div>



    </>
  )
}

export default App
