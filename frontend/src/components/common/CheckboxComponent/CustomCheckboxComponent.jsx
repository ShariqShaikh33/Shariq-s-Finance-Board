import React from 'react'
import { useSearch } from '../../../hooks/pages/transactions/useSearch';
import { useSelector } from 'react-redux';
import { searchSelector } from '../../../store/Slices/UI/Search/searchSelector';

function CustomCheckboxComponent(props) {
    const {name, checkboxlist,condition, k,func} = props;
    
    const {addFilter} = useSearch();
    const onChange=(key, value, check)=>{
        addFilter(key,value, check);
    }
    const filterClick=({func})=>{
        func();
    }
  return (
    <div className='flex flex-col justify-top items-center'>
        <button className={`border border-(--background) w-30 h-10`} onClick={()=>filterClick({func})}>{name}</button>
        { condition &&  
            checkboxlist.map((c)=>{
                return (
                <div >
                    <label htmlFor={c}>{c}</label>
                    <input key={c} type='checkbox' id={c} name={name} value={true} defaultChecked onChange={(e)=>onChange(k,c,e.target.checked)}/>
                </div>
                )
            })
        }
    </div>
  )
}

export default CustomCheckboxComponent