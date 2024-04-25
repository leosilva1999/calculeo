import { useState } from 'react'
import Display from './components/Display'

import './App.css'

function App() {

  const [expression, setExpression] = useState(0)
  const [currentNumber, setCurrentNumber] = useState(0)

  const clearDisplay = () => {
    setCurrentNumber(0);
    setExpression(0)
  }

  const alterDisplay = (insertedNumber) =>{
    if(currentNumber==0){
      setCurrentNumber(insertedNumber)
    }else{
      setCurrentNumber(currentNumber + insertedNumber)
    }
  }

  const alterExpression = (signal) => {
    if(expression==0){
      setExpression(currentNumber+signal)
      setCurrentNumber(0)
    }else{
      setExpression(expression + currentNumber + signal)
      setCurrentNumber(0)
    }
  }

  const calcExpression = () => {
      let fullExpression = expression + currentNumber
      setCurrentNumber(parseFloat(eval(fullExpression)).toFixed(4))
      setExpression(0)
  }

  return (
    <div>
      <h1 className='title'>CalcuLeo</h1>
      <div className='calculator'>
        <Display currentNumber = {currentNumber} expression={expression}/>
        <div className='buttonNumber'>
          <button onClick={() => clearDisplay()}>AC</button>
          <button onClick={() => setExpression(expression+currentNumber+"*")}>*</button>
          <button>+-</button>
          <button>%</button><p />
          <button className='number' onClick={() => alterDisplay("7")}>7</button>
          <button className='number' onClick={() => alterDisplay("8")}>8</button>
          <button className='number' onClick={() => alterDisplay("9")}>9</button>
          <button onClick={() => alterExpression("/")}>/</button><p/>
          <button className='number' onClick={() => alterDisplay("4")}>4</button>
          <button className='number' onClick={() => alterDisplay("5")}>5</button>
          <button className='number' onClick={() => alterDisplay("6")}>6</button>
          <button onClick={() => alterExpression("*")}>X</button><p/>
          <button className='number' onClick={() => alterDisplay("1")}>1</button>
          <button className='number' onClick={() => alterDisplay("2")}>2</button>
          <button className='number' onClick={() => alterDisplay("3")}>3</button>
          <button onClick={() => alterExpression("-")}>-</button><p/>
          <button className='number' onClick={() => alterDisplay("0")}>0</button>
          <button className='number' onClick={() => alterDisplay(".")}>.</button>
          <button className='equals' onClick={() => calcExpression()}>=</button>
          <button onClick={() => alterExpression("+")}>+</button><p/>
        </div>
      </div>
    </div> 
  )
}

export default App
