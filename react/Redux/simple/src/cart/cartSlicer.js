// https://react-redux.js.org/tutorials/quick-start

import { createSlice } from "@reduxjs/toolkit";

export const cartSlicer=createSlice({
    name:'cartSlicer',
    initialState:{
        name:"rajesh",
        number:1,
        isImage:true
    },
    reducers:{
        change:(state)=>{
            state.name="Akash"
        },
        plus:(state)=>{
            state.number+=1;
        },
        minus:(state)=>{
            state.number-=1;
        },
        hide:(state)=>{
            state.isImage=false;
        },
        show:(state)=>{
            state.isImage=true;
        },
        hide_show:(state)=>{
            state.isImage=!state.isImage;
        },
    }

})

export const { change, plus, minus , hide, show, hide_show } = cartSlicer.actions

export default cartSlicer.reducer