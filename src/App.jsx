import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <img className='absolute top-0 right-0 opacity-60 -z-1' src='/gradient.png' alt='Gradient-img' />
      
      <div className='h-0 w-[150rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#0022ff] -rotate-[0] -z-10'></div>
    
      <Header/>
      <Hero/>
    </main>
  )
}

export default App
