import { createSlice } from "@reduxjs/toolkit";
import { toggleSidebarAction } from "./Actions/toggleSidebarAction";
import { setLayoutKeyAction } from "./Actions/setLayoutKeyAction";
import { layoutInitialState } from "./layoutInitialState";

export const LayoutSlice = createSlice({
    name: "layoutSlice",
    initialState: layoutInitialState,
    reducers:{
        toggleSidebar: toggleSidebarAction,
        setLayoutKey: setLayoutKeyAction,
    }

});

export const {toggleSidebar, setLayoutKey}= LayoutSlice.actions;
export default LayoutSlice.reducer;

