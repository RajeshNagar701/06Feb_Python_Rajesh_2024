/*

Before 2016 not lifecycle use in Function components after that introduced Hooks then 
we use useEffect() hooks for lifecycle in Function compomnent


The useEffect Hook allows you to perform Lifecycle side effects in your 
Function components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

*/


import React, { useEffect, useState } from 'react'
import Funclife_img from './Funclife_img';

function Func_life() {
 
  const [data, setData] = useState({
    number:1,
    name:"Raj nagar",
    darshan:true
  });  

  // when component load then one time call but awhen update then again again autocall 
  useEffect(()=>{
    console.log("Main Component Load / Birth")
  },[data.number]);


  return (
    <div className='container mt-5'>
        <button onClick={()=>setData({...data,name:"Akash nagar"})}>Change State</button>
        <h1>Hi i am : {data.name}</h1>
        <hr />
        <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
        <h1>{data.number}</h1>
        <button onClick={()=>setData({...data,number:data.number-1})}>-</button>

        <hr />

        <h1>Darshan Management</h1>
        <button onClick={()=>setData({...data,darshan:true})}>open</button>
        <button onClick={()=>setData({...data,darshan:false})}>Close</button>
        <button onClick={()=>setData({...data,darshan:!data.darshan})}>Open/Close</button>
        {data.darshan? <Funclife_img/> : null}
    </div>
  )
}

export default Func_life