import React from 'react'
import CustomSelectComponent from '../../common/SelectComponent/CustomSelectComponent'
import { useSearch } from '../../../hooks/pages/transactions/useSearch';

function SortButton() {
  const sortlist = [
    "amount", "date"
  ]
  const Asc = ["Ascending","Decending"];

  const {setSortBy, setAsc} = useSearch();



  
  return (
    <div>
      <CustomSelectComponent optionlist={sortlist} setFunction={setSortBy} init="Sort by"></CustomSelectComponent>
      <CustomSelectComponent optionlist={Asc} setFunction={setAsc} init="Order"></CustomSelectComponent>
    </div>
  )
}

export default SortButton