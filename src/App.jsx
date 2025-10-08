import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards/Cards'
import BottomNav from './components/BottomNav'
import AppFooter from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Hero/>
      <img className='absolute top-0 right-0 opacity-60 -z-1' src='/gradient.png' alt='Gradient-img' />
      <div className='h-0 w-[150rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#0022ff] -rotate-[0] -z-10'></div>
      
      <Cards/>
      <Cards/>
      <div className="min-h-screen bg-gray-900 text-white">
      <BottomNav />
      
    </div>
      <AppFooter/>
    </main>
  )
}
export default App
