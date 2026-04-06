import React from 'react'

function TransactionCard(props) {
  const {date,category,type,amount,description, className} = props
  return (
    <div className={className}>
      <div className='w-[25%] text-left'>{date}</div>
      {
        description && <div className='w-[25%] text-left'>{description}</div>
      }
      <div className='w-[25%] text-center'>{category}</div>
      <div className='w-[25%] text-center'>{type}</div>

      <div className='w-[25%] text-center'>{amount}</div>
        
    </div>
  )
}

export default TransactionCard