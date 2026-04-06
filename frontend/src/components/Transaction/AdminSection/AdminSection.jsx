import React from 'react'
import { useNavigate } from 'react-router'

function AdminSection() {
  const navigate = useNavigate();
  const onClick=(page)=>{
    navigate(`/${page}`);
  }
  const classname = "border w-40 bg-(--panel-background) border-(--background)"
  return (
    <div className='w-full flex justify-evenly'>

        <button className={classname} onClick={()=>onClick("transaction/addtransaction")}>Add Transaction</button>
        <button className={classname} onClick={()=>onClick("transaction")}>Table</button>
        <button className={classname} onClick={()=>onClick("transaction/edittransaction")}>Edit Transaction</button>
    </div>
  )
}

export default AdminSection