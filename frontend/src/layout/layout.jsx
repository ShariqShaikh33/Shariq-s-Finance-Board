import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Menu from '../components/Layout/Menu/Menu';
import Layoutheading from '../components/Layout/Heading/Layoutheading';
import { useDispatch, useSelector } from 'react-redux';
import { useHeading } from '../hooks/layout/UseHeading';
import { setLayoutKey } from '../store/Slices/UI/Layout/LayoutSlice';
import { LayoutSelector } from '../store/Slices/UI/Layout/layoutSelector';

function Layout(props) {

  return (
    <div id="layout-container" className='h-screen flex'>
        <div id="layout-menu" className=' w-50'>
          <Menu></Menu>
        </div>
        <div id="layout-body" className=' w-full h-screen border-10 flex flex-col justify-between'>
            <Layoutheading/>
            <Outlet/>   
        </div>
    </div>
    
  )
}

export default Layout;