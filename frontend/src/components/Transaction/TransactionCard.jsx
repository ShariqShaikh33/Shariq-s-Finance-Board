import React from 'react'

function TransactionCard(props) {
  const {amount} = props
  return (
    <div className='border'>{amount}</div>
  )
}

export default TransactionCard