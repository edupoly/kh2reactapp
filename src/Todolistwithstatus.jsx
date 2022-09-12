import React from 'react'
import Todo from './Todo';

function Todolistwithstatus() {
    const [todos, setTodos] = React.useState([
        {
            title:'cypress',
            status:false
        },
        {
            title:'puppeteer',
            status:true
        },
        {
            title:'mocking',
            status:true
        },
    ])
        function toggle(id){
            var temp = [...todos];
            temp[id].status=!temp[id].status
            setTodos([...temp])
        }
    
        // function done(id){
    //     var temp = [...todos];
    //     temp[id].status=true
    //     setTodos([...temp])
    // }
    // function undo(id){
    //     var temp = [...todos];
    //     temp[id].status=false;
    //     setTodos([...temp])
    // }
  return (
    <div className='betterview'>
        <h1>Todolistwithstatus</h1>
        <ul>
            {
                todos.map((t,i)=>{
                    return  (<Todo t={t} toggle={toggle} i={i}></Todo>)
                })
            }
        </ul>
    </div>
  )
}

export default Todolistwithstatus