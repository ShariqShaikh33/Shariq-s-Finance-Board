import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredTransactions, transactionSelector } from '../../store/Slices/Transaction/transactionSelector'
import TransactionCard from './TransactionCard'

function TransactionTable(props) {
    const {className}=props;
    const list = useSelector(selectFilteredTransactions)
    console.log(list)
  return (
    <div className='w-full h-10 bg-(--panel-background)'>
        <div className='pl-3 flex w-full h-full justify-between items-center bg-(--panel-background)'>
            <div className='w-[25%] text-left'>Date</div>
            <div className='w-[25%] text-left'>Description</div>
            <div className='w-[25%] text-center'>Category</div>
            <div className='w-[25%] text-center'>Type</div>
            <div className='w-[25%] text-center'>Amount</div>
        </div>
        <div className='pl-3 pb-3 w-full text-center bg-(--panel-background) '>
        {
            list.map((t)=>{
                return <TransactionCard key={t.id} description={t.description} date={t.date} category={t.category} type={t.type} amount={t.amount} className="'w-full h-full bg-(--panel-background) border border-(--background) border-l-(--panel-background) border-r-(--panel-background) flex justify-between items-center"/>
            })
        }
        </div>
    </div>
  )
}

export default TransactionTable