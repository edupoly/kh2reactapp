import React from "react";
class TodoClass extends React.PureComponent{
    constructor(props){
        super();
        console.log(props.t,"Todo constructor called")
    }
    componentDidMount(){
        console.log(this.props.t,"Todo componentDidMount called")
    }
    componentWillUnmount(){
        console.log(this.props.t,"Todo componentWillUnmount called")
    }
    render(){
        console.log(this.props.t,"Todo render called")
        return(
            <li>
                {this.props.t}
                <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
            </li>
        )
    }
}
export default TodoClass