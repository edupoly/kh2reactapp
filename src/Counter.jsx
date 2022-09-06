import React from 'react';
import './Counter.css';
import { useCounter } from './hooks';
function Counter(){
    var [count,inc,dec]=useCounter()
    return(
        <div className="betterview">
            <h1 className='bluecol'>Count:{count}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </div>
    )
}

export default Counter;