import React from 'react'
import { LayoutSelector } from '../../../store/Slices/UI/Layout/layoutSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useHeading } from '../../../hooks/layout/UseHeading';
import { setLayoutKey } from '../../../store/Slices/UI/Layout/LayoutSlice';

function Layoutheading() {
  const {setAdmin,admin} = useHeading();
  const {heading, subheading} = useSelector(LayoutSelector);
  console.log(heading); 
  const adminChange=()=>{
    setAdmin();
  }
  return (
    <div id='layout-title' className='h-20 flex flex-col justify-center bg-(--panel-background) rounded-lg mt-3 pl-3 pr-3'>
      <div className='flex text-2xl h-[45%] w-full border-b border-(--background) pl-3 align-bottom justify-between'>{heading}
        <div className='w-[10%]'>
        {heading=="Transactions" && <button className={`w-full rounded-lg text-lg border border-(--background) ${admin ? "bg-(--secondary)":"bg-(--background)"}`} onClick={()=>adminChange()}>Admin</button>}  
      </div>
      </div>
      <div className='text-sm h-[45%] text-gray-700 pl-3'>{subheading}</div>
      
    </div>
  )
}

export default Layoutheading