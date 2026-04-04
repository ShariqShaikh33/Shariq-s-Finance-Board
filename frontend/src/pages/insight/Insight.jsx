import React, { useEffect } from 'react'
import { useHeading } from '../../hooks/layout/UseHeading'
import SummarySection from '../../components/common/SummarySection/SummaySection';
import { insightList } from '../../components/Insight/InsightSection/insightList';

function Insight() {
  const {setHeading} = useHeading()

  useEffect(()=>{
    setHeading("Insight");
  },[])
  return (
    <div className='h-full'>
      <SummarySection className="border flex justify-evenly w-full h-[30%]" list={insightList}/>
    </div>
  )
}

export default Insight