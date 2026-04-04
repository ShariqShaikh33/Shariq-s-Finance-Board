import React from 'react'

function AmountCard(props) {
    const {title,value} = props
  return (
    <div className='border w-50 flex flex-col justify-center gap-2 items-center'>
        <div>{title}</div>
        <div>{value}</div>
    </div>
  )
}

export default AmountCard