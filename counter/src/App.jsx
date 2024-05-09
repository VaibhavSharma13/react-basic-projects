import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0;
  
  const addValue = () => {
    if (counter<5) counter += 1
    setCounter(counter)
    console.log("clicked", counter)
  }

  const removeValue = () => {
    if (counter>0) counter -= 1
    setCounter(counter)
    console.log("clicked", counter)
  }


  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
