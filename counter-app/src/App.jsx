import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let [step, setStep] = useState(1);
  
  const addValue = ()=>{
    
    if(counter +step <=30){
      counter = counter + 1;
      setCounter(counter);
    }
  }

  const removeValue = ()=>{
    if(counter-step >=0){
      counter = counter-1;
      setCounter(counter);
    }
    
  }
  const resetValue = ()=>{
    setCounter(0);
  }
  return (
    <>
      <h1>Mero Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <br/>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={resetValue}>Reset Value</button>
    </>
  )
}

export default App
