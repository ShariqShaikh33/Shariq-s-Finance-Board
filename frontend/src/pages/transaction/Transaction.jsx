import React, { useEffect } from 'react'
import { useHeading } from '../../hooks/layout/UseHeading';
import TransactionTable from '../../components/Transaction/TransactionTable';
import SearchSection from '../../components/Transaction/SearchSection/SearchSection';
import AdminSection from '../../components/Transaction/AdminSection/AdminSection';
import { useSelector } from 'react-redux';
import { transactionSelector } from '../../store/Slices/Transaction/transactionSelector';
import { LayoutSelector } from '../../store/Slices/UI/Layout/layoutSelector';
import FilterButton from '../../components/Transaction/SearchSection/FilterButton';
import { Outlet } from 'react-router';

function Transaction() {
  const {admin} = useSelector(LayoutSelector);
  const {setHeading} = useHeading()
  console.log(admin);
    useEffect(()=>{
      setHeading("Transactions");
    },[])
  return (
    <div className='h-[85%] border flex flex-col justify-evenly overflow-auto'>
      <SearchSection/>
      
      <Outlet></Outlet>

      {
        admin && <AdminSection/>
      }

    </div>
  )
}

export default Transaction