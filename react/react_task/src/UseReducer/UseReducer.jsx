/*
The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that 
rely on complex logic, 

useReducer may be useful.

The useReducer Hook accepts two arguments.

useReducer(<reducer>, <initialState>)

*/
import React, { useReducer } from 'react'
import ReducerImg from './ReducerImg';


function UseReducer() {

    const mydata={
        name:"Raj nagar",
        number:1,
        isImage:true
    }

    function myaction(state,action){
        if (action.type == "Change") {
            return ({ ...state, name: "Akash nagar" });
        }
        if (action.type == "Plus") {
            return ({ ...state, number: state.number+1 });
        }
        if (action.type == "Minus") {
            return ({ ...state, number: state.number-1 });
        }
        if (action.type == "Hide") {
            return ({ ...state, isImage:false });
        }
        if (action.type == "Show") {
            return ({ ...state, isImage: true });
        }
        if (action.type == "Hide_Show") {
            return ({ ...state, isImage: !state.isImage });
        }
    }
    const [state, dispatch] = useReducer(myaction, mydata)

    return (
        <div className='container mt-5'>
            <button className=' btn btn-primary' onClick={()=>dispatch({type:"Change"})}>Change</button>
            <h1>{state.name}</h1>
            
            <br/><br/>
           
            <button className=' btn btn-primary ' onClick={()=>dispatch({type:"Plus"})}>+</button>
            <h1>{state.number}</h1>
            <button className=' btn btn-primary' onClick={()=>dispatch({type:"Minus"})}>-</button>
            
            <br/><br/>
           
            <button className=' btn btn-primary' onClick={()=>dispatch({type:"Hide"})}>Hide</button>
            <button className=' btn btn-primary' onClick={()=>dispatch({type:"Show"})}>Show</button>
            <button className=' btn btn-primary' onClick={()=>dispatch({type:"Hide_Show"})}>Hide_Show</button>
           
            { state.isImage ? <ReducerImg/> : null }
            
        </div>
    )
}

export default UseReducer