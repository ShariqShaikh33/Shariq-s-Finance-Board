import React from 'react'
import { useSearch } from '../../../hooks/pages/transactions/useSearch';

function CustomCheckboxComponent(props) {
    const {name, checkboxlist,type, k} = props;
    const {addFilter} = useSearch();
    const onChange=(key, value, check)=>{
        addFilter(key,value, check);
    }
  return (
    <div>
        <label>{name}</label>
        {
            checkboxlist.map((c)=>{
                return (
                <div>
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