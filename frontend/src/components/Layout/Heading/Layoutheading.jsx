import React from 'react'
import { LayoutSelector } from '../../../store/Slices/UI/Layout/layoutSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useHeading } from '../../../hooks/layout/UseHeading';
import { setLayoutKey } from '../../../store/Slices/UI/Layout/LayoutSlice';

function Layoutheading() {
  const {setAdmin} = useHeading();
  const {heading, subheading} = useSelector(LayoutSelector);
  console.log(heading); 
  const adminChange=()=>{
    setAdmin();
  }
  return (
    <div id='layout-title' className='h-18 border'>
      {heading}
      {heading=="Transactions" && <button onClick={()=>adminChange()}>Admin</button>}  
    </div>
  )
}

export default Layoutheading