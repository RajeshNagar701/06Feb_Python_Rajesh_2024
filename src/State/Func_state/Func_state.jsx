
/*

The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

Import useState
To use the useState Hook, we first need to import it into our component.

import { useState } from "react";

Initialize useState
We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

1)create : 
    const [name, setName] = useState("Rajesh nagar");

use : <h1>{name}</h1> 

2)create: 
const [data, setData] = useState({
    number:1,
    darshan:true
  });  

use : <h1>{data.number}</h1>

Set State : 

<button onClick={()=>setData({...data,darshan:true})}>open</button>

*/

import React, { useState } from 'react'
import Func_img from './Func_img';

function Func_state() {

  const [name, setName] = useState("Rajesh nagar");
  
  const [data, setData] = useState({
    number:1,
    darshan:true
  });  

  return (
    <div className='container mt-5'>
        <button onClick={()=>setName("Raj Nagar")}>Change SATATE</button>
        <h1>My name is : {name}</h1>

        <hr />
        <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
        <h1>{data.number}</h1>
        <button onClick={()=>setData({...data,number:data.number-1})}>-</button>

        <hr />

        <h1>Darshan Management</h1>
        <button onClick={()=>setData({...data,darshan:true})}>open</button>
        <button onClick={()=>setData({...data,darshan:false})}>Close</button>
        <button onClick={()=>setData({...data,darshan:!data.darshan})}>Open/Close</button>
        {data.darshan? <Func_img/> : null}
    </div>
  )
}

export default Func_state