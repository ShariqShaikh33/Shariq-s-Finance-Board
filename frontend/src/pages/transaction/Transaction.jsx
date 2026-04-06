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
  const {setHeading,setSubheading} = useHeading()
  console.log(admin);
    useEffect(()=>{
      setHeading("Transactions");
      setSubheading("All your transactions")
    },[])
  return (
    <div className='h-full pl-5 pr-9 flex flex-col justify-evenly overflow-auto'>
      <SearchSection/>
      <div className='w-full h-[80%] overflow-auto'>
      <Outlet></Outlet>
      </div>

      {
        admin && <AdminSection/>
      }

    </div>
  )
}

export default Transaction