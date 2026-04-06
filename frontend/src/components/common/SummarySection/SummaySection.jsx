import React from 'react'
import AmountCard from '../AmountCard/AmountCard'

function SummarySection(props) {
    console.log(props)
    const {list, className} = props;

  return (
    <div className={className}>
        {
            list.map((l)=>{
                return <AmountCard key={l.id} title={l.name} value={l.value} />
            })
        }
        
    </div>
  )
}

export default SummarySection