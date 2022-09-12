import React from 'react'

function ConditionalStyle() {
    var [ar,setar] = React.useState([12,456,57,34,4576,31])
  return (
    <div className='betterview'>
        <h1>Conditional Styling</h1>
        {
            ar.map((v,i)=>{
                return(
                        <li style={v%2===0?{backgroundColor:'lightblue'}:{backgroundColor:'lightgreen'}}>
                            {v}
                        </li>
                        )
            })
        }
    </div>
  )
}

export default ConditionalStyle