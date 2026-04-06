import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../../../store/Slices/UI/Search/searchSelector";
import { addToFilter, removeFilter, setSearchKey } from "../../../store/Slices/UI/Search/searchSlice";
import { removeFilterAction } from "../../../store/Slices/UI/Search/Actions/removeFilterAction";

export const useSearch = () => {
  const dispatch = useDispatch();
  const { searchbar, filterbytype, typeOpen,categoryOpen, filterbycategory, sortBy, asc } = useSelector(searchSelector);

  const setSearchbar = (value) => {
    dispatch(setSearchKey({ key: "searchbar", value }));
  };

  const addFilter = (key, value, check) => {
    console.log(check);
      if(check){
        console.log(value)
        dispatch(addToFilter({ key, value}));
      }
      else{
        console.log("Hiii")

        dispatch(removeFilter({key, value}));
      }
  };

  const setSortBy = (value) => {
    dispatch(setSearchKey({ key: "sortBy", value }));
  };

  const setAsc = (value) => {
    dispatch(setSearchKey({ key: "asc", value }));
  };

  const setTypeOpen=()=>{
    const value = !typeOpen;
    dispatch(setSearchKey({key:"typeOpen",value}));
  }

  const setCategoryOpen=()=>{
    const value = !categoryOpen;
    dispatch(setSearchKey({key:"categoryOpen",value}));
  }

  return { searchbar, filterbytype, filterbycategory, sortBy, asc, typeOpen, categoryOpen, setSearchbar, addFilter, setSortBy, setAsc, setTypeOpen, setCategoryOpen };
};