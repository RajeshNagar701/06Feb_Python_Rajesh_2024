import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { change, hide, hide_show, minus, plus, show } from './cartSlicer';
import Image from './Image';




function Cart() {

    const { number,name,isImage }=useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(change())}>Change State</button>
            <h1>{name}</h1>

            <button onClick={()=>dispatch(plus())}>+</button>
            <h1>{number}</h1>
            <button onClick={()=>dispatch(minus())}>-</button>

            <hr />
            <button onClick={()=>dispatch(hide())}>Hide</button>
            <button onClick={()=>dispatch(show())}>Show</button>
            <button onClick={()=>dispatch(hide_show())}>Hide/Show</button>
            {
                isImage? <Image/> : null
            }
        </div>
    )
}

export default Cart