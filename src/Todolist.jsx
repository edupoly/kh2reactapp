import React from "react";
function Todolist(){
    var [todos,setTodos ] = React.useState(['testing videos','clean car'])
    var [newtask,setNewTask] = React.useState('');
    var myref = React.useRef()
    function addTask(){
        setTodos([...todos,newtask])
    }
    function checkEnter(e){
        if(e.key==='Enter'){
            addTask();
        }
    }
    React.useEffect(()=>{
        myref.current.focus();
    },[])
    return(
        <div className="betterview">
            <h1 className="bluecol">Todolist</h1>
            <input type="text" onChange={(e)=>{setNewTask(e.target.value)}} ref={myref} onKeyUp={checkEnter}/>
            <button onClick={addTask}>Add Task</button>
            {
                todos.map((t,i)=>{
                    return(<li>{t}</li>)
                })
            }
        </div>
    )
}
export default Todolist