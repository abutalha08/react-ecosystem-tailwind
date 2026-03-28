
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'
import ResultsBarChart from './components/ResultsChart/ResultsBarChart'
import axios from 'axios'
import FitnessChart from './components/FitnessChart/FitnessChart'


const pricingPromise = fetch("pricingData.json").then(res => res.json());

const fitnessPromise = axios.get('fitnessData.json');


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

      <main className="min-h-screen w-full flex flex-col items-center">
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>


        <div className="w-full max-w-5xl mt-10 h-96">
          <ResultsChart></ResultsChart>

        </div>

        <div className="w-full max-w-5xl mt-10 h-96">

          <ResultsBarChart></ResultsBarChart>
        </div>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

          <div className="w-full max-w-5xl mt-28 h-96">
            <FitnessChart fitnessPromise={fitnessPromise}></FitnessChart>

          </div>


        </Suspense>
      </main>
    </>
  )
}

export default App;
