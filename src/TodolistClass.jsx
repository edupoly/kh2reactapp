import React from "react";
import TodoClass from "./TodoClass";

class TodolistClass extends React.Component{
    constructor(){
        super();
        this.state={
            todos:['puppteer','cypress','mocking'],
            newtask:''
        }
    }
    addTask=()=>{
        this.setState({todos:[...this.state.todos,this.state.newtask]})
    }
    deleteTask = (id)=>{
        var temp = [...this.state.todos];
        temp.splice(id,1);
        this.setState({todos:[...temp]})
    }
    componentDidMount(){
        document.getElementById("d1").focus();
    }
    render(){
       
        return(
            <div className="betterview">
                <input id='d1' type="text" onChange={(e)=>{this.setState({newtask:e.target.value})}}/>
                <button onClick={this.addTask}>Add Task</button>
                <ul>
                    {
                        this.state.todos.map((t,i)=>{
                            return(<TodoClass t={t} id={i} key={i} deleteTask={this.deleteTask}></TodoClass>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default TodolistClass;