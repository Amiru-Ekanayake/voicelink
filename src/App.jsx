import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards/Cards'
import BottomNav from './components/BottomNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <img className='absolute top-0 right-0 opacity-60 -z-1' src='/gradient.png' alt='Gradient-img' />
      
      <div className='h-0 w-[150rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#0022ff] -rotate-[0] -z-10'></div>
    
      <Header/>
      <Hero/>
      <Cards/>

      <div className="min-h-screen bg-gray-900 text-white">
      
      <BottomNav />
    </div>
      
    </main>
  )
}

export default App
