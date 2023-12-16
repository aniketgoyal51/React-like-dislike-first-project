import { createSlice } from "@reduxjs/toolkit";

const countslice=createSlice({
    name:"Count",
    initialState: 0,
    reducers:{
        increase:(state)=>state+1,
        decrease:(state)=>state-1
    }
})

export const listAction =countslice.actions
export const listReducer =countslice.reducer
export const listSelector = (state)=>state.listReducer;