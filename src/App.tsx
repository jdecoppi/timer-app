import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerApp from './components/TimerApp.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TimerApp />
      
    </>
  )
}

export default App
