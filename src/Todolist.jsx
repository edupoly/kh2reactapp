import React from "react";
function Todolist(){
    var [ todos,setTodos ] = React.useState(['testing videos','clean car','puppeter','cypres','jest'])
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
    function del(ind){
        var temp = [...todos];
        temp.splice(ind,1)
        setTodos([...temp])
    }
    return(
        <div className="betterview">
            <h1 className="bluecol">Todolist</h1>
            <input type="text" onChange={(e)=>{setNewTask(e.target.value)}} ref={myref} onKeyUp={checkEnter}/>
            <button onClick={addTask}>Add Task</button>
            {
                todos.map((t,i)=>{
                    return(<li>
                        {t}
                        <button onClick={()=>{del(i)}}>Delete</button>
                    </li>)
                })
            }
        </div>
    )
}
export default Todolist