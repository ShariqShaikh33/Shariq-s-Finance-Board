import React from 'react'
import { useNavigate } from 'react-router'

function AdminSection() {
  const navigate = useNavigate();
  const onClick=(page)=>{
    navigate(`/${page}`);
  }
  return (
    <div className='w-full flex justify-evenly'>

        <button onClick={()=>onClick("transaction/addtransaction")}>Add Transaction</button>
        <button onClick={()=>onClick("transaction")}>Table</button>
        <button onClick={()=>onClick("transaction/edittransaction")}>Edit Transaction</button>
    </div>
  )
}

export default AdminSection