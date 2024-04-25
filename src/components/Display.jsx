import React from 'react'
import './Display.css'

const Display = ({count}) => {

  return (
    <div className='display'>
        <p><h2>{count}</h2></p>
        <p><h1>{count}</h1></p>
    </div>
  )
}

export default Display