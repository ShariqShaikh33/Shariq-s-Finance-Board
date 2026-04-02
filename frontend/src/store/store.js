import {configureStore} from '@reduxjs/toolkit'
import transactionSlice from './Slices/Transaction/transactionSlice';

export const store = configureStore({
    reducer:{
        "Transaction": transactionSlice
    }
})