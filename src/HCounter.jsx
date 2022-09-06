import React from 'react'
import {useCounter} from './hooks'
function HCounter(){
  var [count,inc,dec] = useCounter()
  return (
    <div className='betterview'>
        <h1>Counter:{count}</h1>
        <h1>
          <span onClick={inc}>Increment</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={dec}>Decrement</span>
        </h1>
    </div>
  )
}

export default HCounter