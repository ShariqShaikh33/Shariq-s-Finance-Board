import React from 'react'
import { useNavigate } from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import { LayoutSelector } from '../../../store/Slices/UI/Layout/layoutSelector';
import { setLayoutKey } from '../../../store/Slices/UI/Layout/LayoutSlice';


function Menubutton(props) {
  const navigate = useNavigate();
  const {name, id} = props;

  const onClick=(id)=>{
    navigate(id);
  }

  return (
    <button id={id} onClick={()=>onClick(id)}>
        {name}
    </button>
  )
}

export default Menubutton;