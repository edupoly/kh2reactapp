import React from 'react'
import Comp2 from './Comp2'

function Comp1(props) {
  return (
    <div className='betterview'>
        <h1>Comp1</h1>
        <h1>{props.fn}</h1>
        <Comp2 fname={props.fn}></Comp2>
    </div>
  )
}

export default Comp1