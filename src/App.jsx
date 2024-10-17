import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('Button Click')
  }
  const handleClick2=() =>{
    alert('Petter')
  }
  const addToFive = (num) =>{
    alert(num +5)
  }
  return (
    <>
      

      <h1>Vite + React</h1>

      <Users></Users>

      <Team></Team>


      <Counter></Counter>




      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => addToFive(3)}>Click 3</button>
      
    </>
  )
}

export default App
