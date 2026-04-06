import React from 'react'
import TransactionCard from '../../Transaction/TransactionCard'
import { useSelector } from 'react-redux'
import { mostRecentTransactions } from '../../../store/Slices/Transaction/transactionSelector'

function SimpleTable() {
    const {recentTransactions} = useSelector(mostRecentTransactions);

  return (
    <div className='border w-[39%] h-fit overflow-y-auto'>
        {
            recentTransactions.map((t)=>{
                return <TransactionCard key={t.id} amount={t.amount}/>
            })
        }
    </div>
  )
}
export default SimpleTable