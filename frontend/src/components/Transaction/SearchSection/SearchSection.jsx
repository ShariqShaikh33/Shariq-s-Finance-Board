import React from 'react'
import Searchbar from './Searchbar'
import FilterButton from './FilterButton'
import SortButton from './SortButton'
import SearchButton from './SearchButton'

function SearchSection() {
  return (
    <div className='flex gap-5 w-full border justify-evenly'>
        <Searchbar/>
        <FilterButton/>
        <SortButton/>
    </div>
  )
}

export default SearchSection