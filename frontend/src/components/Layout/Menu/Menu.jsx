import React from 'react'
import { menuButtonsList } from '../Menubutton/menuButtonsList'
import Menubutton from '../Menubutton/Menubutton'


function Menu() {
  return (
    <div className='flex flex-col gap-0.5 p-1'>
        
        {
            menuButtonsList.map((i)=>{
                return <Menubutton key={i.id} id={i.id} name={i.name}/>
            })
        }
    </div>
  )
}

export default Menu