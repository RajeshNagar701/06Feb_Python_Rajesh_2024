import React from 'react'

import './Basic1.css';  // simple css file load but class conflict problem occured

const myinternal={color:"blue",backgroundColor:"yellow"}

function Basic_css() {
  return (
    <div>
        <h1 style={{color:"red",backgroundColor:"pink"}}>Hi i am inline</h1>

        <h1 style={myinternal}>Hi i am internal</h1>

        <h1 className='fafa'>Hi i am External style 1</h1>
    </div>
  )
}

export default Basic_css