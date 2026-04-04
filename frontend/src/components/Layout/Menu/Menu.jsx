import React from 'react'
import { menuButtonsList } from '../Menubutton/menuButtonsList'
import Menubutton from '../Menubutton/Menubutton'


function Menu() {
  return (
    <div className=' border h-full flex flex-col'>
        
        {
            menuButtonsList.map((i)=>{
                return <Menubutton key={i.id} id={i.id} name={i.name}/>
            })
        }
    </div>
  )
}

export default Menu