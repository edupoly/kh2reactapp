import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
        console.log("Counter Class Component constructor called")
        this.state={
            count:0
        }
    }
    inc = ()=>{
        this.setState({count:this.state.count+1})
    }
    dec = ()=>{
        this.setState({count:this.state.count-1})
    }
    componentDidMount(){
        console.log("Counter class Component componentDidMount")
    }
    componentDidUpdate(){
        console.log("Counter class Component componentDidUpdate")
    }
    render(){
        console.log("Counter Class Component render called")
        return(
            <div className="betterview">
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.inc}>Increment</button>
                <button onClick={this.dec}>Decrement</button>
            </div>
        )
    }
}

export default CounterClass