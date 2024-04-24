import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
      <div className='calculator'>
        <div className='display'>
          <p><h1>000</h1></p>
        </div>
        <div className='buttonNumber'>
          <button>AC</button>
          <button>*</button>
          <button>+-</button>
          <button>%</button><p />
          <button className='number'>7</button>
          <button className='number'>8</button>
          <button className='number'>9</button>
          <button>/</button><p />
          <button className='number'>4</button>
          <button className='number'>5</button>
          <button className='number'>6</button>
          <button>X</button><p />
          <button className='number'>1</button>
          <button className='number'>2</button>
          <button className='number'>3</button>
          <button>-</button><p />
        </div>
      </div>
  )
}

export default App
