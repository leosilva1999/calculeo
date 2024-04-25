import { useState } from 'react'
import Display from './components/Display'

import './App.css'

function App() {
  const [count, setCount] = useState(21)

  return ( 
      <div className='calculator'>
        <Display count = {count}/>
        <div className='buttonNumber'>
          <button>AC</button>
          <button>*</button>
          <button>+-</button>
          <button>%</button><p />
          <button className='number' onClick={() => setCount(2)}>7</button>
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
