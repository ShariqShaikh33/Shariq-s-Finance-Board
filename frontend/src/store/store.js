import {configureStore} from '@reduxjs/toolkit'
import transactionSlice from './Slices/Transaction/transactionSlice';
import LayoutSlice from './Slices/UI/Layout/LayoutSlice';
import searchSlice from './Slices/UI/Search/searchSlice';

export const store = configureStore({
    reducer:{
        "Transaction": transactionSlice,
        "Layout": LayoutSlice,
        "Search": searchSlice
    }
})