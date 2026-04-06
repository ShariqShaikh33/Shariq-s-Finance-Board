import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Menu from '../components/Layout/Menu/Menu';
import Layoutheading from '../components/Layout/Heading/Layoutheading';
import { useDispatch, useSelector } from 'react-redux';
import { useHeading } from '../hooks/layout/UseHeading';
import { setLayoutKey } from '../store/Slices/UI/Layout/LayoutSlice';
import { LayoutSelector } from '../store/Slices/UI/Layout/layoutSelector';
import image from '../layout/logo.png';
function Layout(props) {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/overview");
  },[])

  return (
    <div id="layout-container" className='h-screen flex bg-(--background)'>
        <div id="layout-menu" className='border-r border-(--secondary) pr-2 w-55'>
          <div className='w-full h-[15%] p-3'>
              <img className='h-full w-full rounded-lg' src={image}/>
            {/* <div className='h-16 border rounded-lg w-full'>
            </div> */}
          </div>
          <Menu></Menu>
        </div>
        <div id="layout-body" className=' w-full h-full flex flex-col justify-between'>
            <div className='pl-5 pr-9 w-full'>
              <Layoutheading/>
            </div>
            <Outlet/>   
        </div>
    </div>
    
  )
}

export default Layout;