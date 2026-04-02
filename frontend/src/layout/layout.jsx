import React from 'react'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div id="layout-container" className='h-screen flex'>
        <div id="layout-menu" className='border w-50'>layout</div>
        <div id="layout-body" className='border w-full flex flex-col'>
            <div id='layout-title' className='border h-15'>Overview Heading</div>
            <Outlet></Outlet>    
        </div>
    </div>
    
  )
}

export default Layout;