import React from 'react'
import Searchbar from './Searchbar'
import FilterButton from './FilterButton'
import SortButton from './SortButton'
import SearchButton from './SearchButton'
import { useSearch } from '../../../hooks/pages/transactions/useSearch'

function SearchSection() {
  const {typeOpen, categoryOpen} = useSearch();
  return (
    <div className={`flex bg-(--panel-background) rounded-lg border-b-2 border-(--background) gap-5 w-full ${typeOpen || categoryOpen ? "h-fit":"h-15"} justify-between p-3 items-top`}>
        <Searchbar/>
        <FilterButton/>
        <SortButton/>
    </div>
  )
}

export default SearchSection