
/*

React components has a built-in state object.
state is mutable object means we can change any time
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.

State create in constructor  / The state object is initialized in the constructor:

Create :this.state = {brand: "Ford",model:"2015",price:"50L"};  // OBJECT

use : {this.state.brand}

change/modifide : Changing the state Object 
Changing the state Object : this.setState()


Note : state use only in class component not in function before 2016
but after 2016 , react introduced react Hooks then we can use state in function component


*/


import React, { Component } from 'react'
import Class_img from './Class_img';

export class Class_state extends Component {

    constructor(){
        super();
        this.state={
            name:"Rajesh nagar",
            age:"34",
            number:1,
            darshan:true
        }
    }

  render() {
    return (
      <div className='container mt-5'>
        <button onClick={()=>this.setState({name:"Raj nagar",age:"35"})}>Change SATATE</button>
        <h1>My name is : {this.state.name} & my age is : {this.state.age[0]}</h1>
        
        <hr />
       
        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>

        <hr />
        <h1>Darshan Management</h1>
        <button onClick={()=>this.setState({darshan:true})}>open</button>
        <button onClick={()=>this.setState({darshan:false})}>Close</button>
        <button onClick={()=>this.setState({darshan:!this.state.darshan})}>Open/Close</button>
        {this.state.darshan? <Class_img/> : null}

      </div>
    )
  }
}

export default Class_state