 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  // Hooks
  let [counter, setCounter] = useState(0)


  const addValue = ()=>  {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>COUNTER</h1>
     <h4>The Counter  will count numbers from 0 to 20</h4>
     <hr />
     <h1>{counter }</h1>

     <h3>
      <button onClick={addValue}>Add value : {counter} </button>
     </h3>

     <h3>
      <button onClick={removeValue}>Remove value : {counter} </button>
    </h3>
    </>
  )
}  

export default App
