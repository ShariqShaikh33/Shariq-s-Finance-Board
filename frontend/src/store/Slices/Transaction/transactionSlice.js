import { createSlice } from "@reduxjs/toolkit";
import { transactionInitialState } from "./transactionInitialState";

export const transactionSlice = createSlice({
    name: "Transaction",
    initialState: transactionInitialState,
    reducers:{
        add:(state,action)=>{
            console.log(action.payload);
        }
    }
})

export const {add} = transactionSlice.actions;
export default transactionSlice.reducer;