import React from 'react'

function AmountCard(props) {
    const {title,value,className} = props
  return (
    <div className={className}>
        <div className='text-2xl text-(--primary) font-bold border-b border-(--background) w-full text-center '>{title}</div>
        <div>{value}</div>
    </div>
  )
}

export default AmountCard