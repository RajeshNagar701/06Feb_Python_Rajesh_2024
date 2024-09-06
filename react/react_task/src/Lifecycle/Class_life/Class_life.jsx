
/*

Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during 
its three main phases.

The three phases are: 
1)Mounting,  componentDidMount()
2)Updating,  componentDidUpdate()  
3)Unmounting componentWillUnmount()

*/


import React, { Component } from 'react'
import Classlife_img from './Classlife_img';

export class Class_life extends Component {

  constructor() {
    super();
    this.state = {
      number: 1,
      darshan: true
    }
  }
  // when component update then function auto call 
  componentDidUpdate() {
    console.log("Component updated");
  }

  render() {
    return (
      <div className='container mt-5'>

        <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.setState({ number: this.state.number - 1 })}>-</button>

        <hr />
        <h1>Darshan Management</h1>
        <button onClick={() => this.setState({ darshan: true })}>open</button>
        <button onClick={() => this.setState({ darshan: false })}>Close</button>
        <button onClick={() => this.setState({ darshan: !this.state.darshan })}>Open/Close</button>
        {this.state.darshan ? <Classlife_img /> : null}

      </div>
    )
  }
}

export default Class_life