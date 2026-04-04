import {configureStore} from '@reduxjs/toolkit'
import transactionSlice from './Slices/Transaction/transactionSlice';
import LayoutSlice from './Slices/UI/Layout/LayoutSlice';

export const store = configureStore({
    reducer:{
        "Transaction": transactionSlice,
        "Layout": LayoutSlice,
    }
})