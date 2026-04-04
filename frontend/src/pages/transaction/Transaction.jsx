import React, { useEffect } from 'react'
import { useHeading } from '../../hooks/layout/UseHeading';
import TransactionTable from '../../components/Transaction/TransactionTable';
import SearchSection from '../../components/Transaction/SearchSection/SearchSection';
import AdminSection from '../../components/Transaction/AdminSection/AdminSection';

function Transaction() {
    const {setHeading} = useHeading()
  
    useEffect(()=>{
      setHeading("Transactions");
    },[])
  return (
    <div className='h-[85%] border flex flex-col justify-evenly'>
      <SearchSection/>
      <TransactionTable/>
      <AdminSection/>

    </div>
  )
}

export default Transaction