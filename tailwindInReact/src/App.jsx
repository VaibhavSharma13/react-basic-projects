import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username: "vaibhav",
    age: 25
  }

  return (
   <>
      <h1 className='bg-green-400 text-black rounded-xl'>Tailwind in React</h1>
      
      <Card username="Bittu" btnText="click me"/>
      <Card username="vaibhav" btnText="visit me"/>

   </>
  )
}

export default App
