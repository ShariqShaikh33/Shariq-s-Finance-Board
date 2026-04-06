import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchSelector } from '../../../store/Slices/UI/Search/searchSelector'
import { setSearchKey } from '../../../store/Slices/UI/Search/searchSlice';
import { useSearch } from '../../../hooks/pages/transactions/useSearch';

function Searchbar() {
  const {setSearchbar} = useSearch()
  const {searchbar, Searchbar} = useSelector(searchSelector)
  const onChange=(value)=>{
    setSearchbar(value);
  }
  return (
    <div className='w-[40%] h-10'>
        <input 
          type="text" 
          className='border border-(--background) w-full h-full rounded-lg pl-3 ' 
          placeholder='Search Here'
          value = {searchbar}
          onChange={(e)=>setSearchbar(e.target.value)}  
        />
    </div>
  )
}

export default Searchbar