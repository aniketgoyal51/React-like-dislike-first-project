import { configureStore } from "@reduxjs/toolkit";
import {listReducer} from './Reducerimpo.js'
export const mystore = configureStore({
    reducer:{
        listReducer,
    }
})

