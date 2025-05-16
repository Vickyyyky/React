import React, { Component } from 'react'

export default class StatesinCbc extends Component {
    state={value:0};

    increment=()=>{
           this.setState({value:this.state.value+1})
    }
    decrement=()=>{
        if(this.state.value>0){
        this.setState({value:this.state.value-1})
        }
    }
    reset=()=>{
        this.setState({value:this.state.value=0})
    }
  render() {
    return (
      <div>
        <h1>States in CBC</h1>
        <h2>Counter:{this.state.value}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        </div>
    );
  }
}
