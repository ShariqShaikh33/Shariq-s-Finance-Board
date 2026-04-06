import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredTransactions, transactionSelector } from '../../store/Slices/Transaction/transactionSelector'
import TransactionCard from './TransactionCard'

function TransactionTable() {
    const list = useSelector(selectFilteredTransactions)
    console.log(list)
  return (
    <div className='border w-full h-[80%] overflow-y-auto'>
        {
            list.map((t)=>{
                return <TransactionCard key={t.id} amount={t.amount}/>
            })
        }
    </div>
  )
}

export default TransactionTable