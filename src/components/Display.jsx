import React from 'react'
import './Display.css'

const Display = ({currentNumber, expression}) => {

  return (
    <div className='display'>
        <h2>{expression}</h2>
        <h1>{currentNumber}</h1>
    </div>
  )
}

export default Display