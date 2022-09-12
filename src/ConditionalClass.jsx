import React from 'react'

function ConditionalClass() {
    var [ar,setar] = React.useState([12,456,57,34,4576,31])
    return (
      <div className='betterview'>
          <h1>Conditional Class application</h1>
          {
              ar.map((v,i)=>{
                  return(
                          <li className={v%2===0?'blueback':'redback'}>
                              {v}
                          </li>
                          )
              })
          }
      </div>
    )
}

export default ConditionalClass