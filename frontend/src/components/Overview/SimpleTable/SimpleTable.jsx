import React from 'react'
import TransactionCard from '../../Transaction/TransactionCard'
import { useSelector } from 'react-redux'
import { mostRecentTransactions } from '../../../store/Slices/Transaction/transactionSelector'

function SimpleTable() {
    const {recentTransactions} = useSelector(mostRecentTransactions);

  return (
    <div className='p-3 w-full h-full flex flex-col rounded-lg justify-evenly bg-(--panel-background) overflow-y-auto'>
        <div className='flex w-full h-full justify-between items-center '>
            <div className='w-[25%] text-left'>Date</div>
            <div className='w-[25%] text-center'>Category</div>
            <div className='w-[25%] text-center'>Type</div>
            <div className='w-[25%] text-center'>Amount</div>
        </div>
        {
            recentTransactions.map((t)=>{
                return <TransactionCard key={t.id} date={t.date} category={t.category} type={t.type} amount={t.amount} className="w-full h-full bg-(--panel-background) border border-(--background) border-l-(--panel-background) border-r-(--panel-background) flex justify-between items-center"/>
            })
        }
    </div>
  )
}
export default SimpleTable