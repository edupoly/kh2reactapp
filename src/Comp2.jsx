import React from 'react'
import MyContext from './MyContext'
function Comp2(props) {
    var d = React.useContext(MyContext)
  return (
    <div className='betterview'>
        <h2>Component2</h2>
        <h1>{props.fname} {d.pname}</h1>
        <h1>{d.price}</h1>
    </div>
  )
}

export default Comp2