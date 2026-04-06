import { createSlice } from "@reduxjs/toolkit";
import { transactionInitialState } from "./transactionInitialState";

export const transactionSlice = createSlice({
    name: "Transaction",
    initialState: transactionInitialState,
    reducers:{
        addNewTransaction:(state,action)=>{
            state.list.push(action.payload);
        },
        editTransaction:(state,action)=>{
            const index = state.list.findIndex(t => t.id === action.payload.id);
            if (index !== -1) state.list[index] = action.payload;
        }
    }
})

export const {addNewTransaction,editTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;