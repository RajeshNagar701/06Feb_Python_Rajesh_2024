import React,{useContext} from 'react'
import { UserContext } from './A'

function E() {
  const {name,setName}=useContext(UserContext);
  return (
    <div>
        <button onClick={()=>setName("Pinal Nagar")}>Change from E</button>
        <h1>Hi i am E : {name}</h1>
    </div>
  )
}

export default E