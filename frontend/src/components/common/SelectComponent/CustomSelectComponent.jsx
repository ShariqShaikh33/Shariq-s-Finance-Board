import React from 'react'
import { useSearch } from '../../../hooks/pages/transactions/useSearch';

function CustomSelectComponent(props) {
    const {optionlist,init,setFunction} = props
    const onChange=(value)=>{
        setFunction(value);
    }
  return (
<select className='border h-10 border-(--background) w-25' onChange={(e)=>onChange(e.target.value)}>
        <option value="0">{init}</option>
        {
            optionlist.map((l)=>{
                return <option key={l} value={l}>{l}</option>
            })
        }
    </select>
  )
}

export default CustomSelectComponent