import React from 'react'
import { useSelector } from 'react-redux'
import { transactionSelector } from '../../store/Slices/Transaction/transactionSelector'
import TransactionCard from './TransactionCard'

function TransactionTable() {
    const list = useSelector(transactionSelector)
    console.log(list)
  return (
    <div className='border w-full h-[80%] overflow-y-auto'>
        {
            list.map((t)=>{
                return <TransactionCard/>
            })
        }
    </div>
  )
}

export default TransactionTable