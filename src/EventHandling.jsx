import React from 'react'

function EventHandling() {
    function jch(x){
        console.log(x)
    }
    return (
        <div className='betterview'>
            <h1>Event Handling</h1>
            <button onClick={jch}>Just Calling Handler</button>
            <button onClick={function(){alert("HI")}}>Another button</button>
            <button onClick={(ev)=>{jch(100)}}>Just Another Button</button>
        </div>
    )
}

export default EventHandling