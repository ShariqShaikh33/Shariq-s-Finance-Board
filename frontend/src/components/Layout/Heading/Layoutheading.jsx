import React from 'react'
import { LayoutSelector } from '../../../store/Slices/UI/Layout/layoutSelector';
import { useSelector } from 'react-redux';
import { useHeading } from '../../../hooks/layout/UseHeading';

function Layoutheading() {
  const {heading, subheading} = useSelector(LayoutSelector);
  console.log(heading); 
  return (
    <div id='layout-title' className='h-18 border'>{heading}</div>
  )
}

export default Layoutheading