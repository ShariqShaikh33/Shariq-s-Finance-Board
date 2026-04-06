import { createSlice } from "@reduxjs/toolkit";
import { setSearchKeyAction } from "./Actions/setSearchKeyAction";
import { searchInitialState } from "./searchInitialState";
import { addToFilterAction } from "./Actions/addToFilterAction";
import { removeFilterAction } from "./Actions/removeFilterAction";

export const searchSlice = createSlice({
    name: "searchSlice",
    initialState: searchInitialState,
    reducers:{
        setSearchKey: setSearchKeyAction,
        addToFilter: addToFilterAction,
        removeFilter: removeFilterAction,
    }
})

export const {setSearchKey,addToFilter,removeFilter} = searchSlice.actions;
export default searchSlice.reducer;