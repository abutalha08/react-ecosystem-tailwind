
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'


const pricingPromise = fetch("pricingData.json").then(res => res.json());


function App() {


  return (
    <>

      <header>
        {/* <h1 className='font-bold bg-red-500'>Hello React</h1> */}

        {/* <DaisyNav></DaisyNav> */}

        {/* <h2 className='text-center text-3xl font-bold'>Taufique</h2> */}


        {/* Create this NavBar by manually not using DaisyUI  */}
        <NavBar></NavBar>
      </header>

      <main>
        <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
