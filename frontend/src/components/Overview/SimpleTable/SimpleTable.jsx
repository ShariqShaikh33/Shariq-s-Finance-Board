import React from 'react'
import TransactionCard from '../../Transaction/TransactionCard'

function SimpleTable() {
    const list=[
        { id: "txn_001", date: "2025-01-01", type: "income", amount: 500 },
        { id: "txn_002", date: "2025-01-03", type: "expense", amount: 340 },
        { id: "txn_003", date: "2025-01-04", type: "expense", amount: 250 },
        { id: "txn_004", date: "2025-01-05", type: "expense", amount: 1120 },
        { id: "txn_005", date: "2025-01-06", type: "expense", amount: 649 },
    ]
  return (
    <div className='border w-[39%] h-fit overflow-y-auto'>
        {
            list.map((t)=>{
                return <TransactionCard key={t.id}/>
            })
        }
    </div>
  )
}
export default SimpleTable