import React, { useEffect } from 'react'
import { useHeading } from '../../hooks/layout/UseHeading';
import SummarySection from '../../components/common/SummarySection/SummaySection';
import DonutGraph from '../../components/common/DonutGraph/DonutGraph';
import BarGraph from '../../components/common/BarGraph/BarGraph';
import SimpleTable from '../../components/Overview/SimpleTable/SimpleTable';
import { summaryList } from '../../components/common/SummarySection/SummaryList';

function Overview() {
    const {setHeading} = useHeading()
  
    useEffect(()=>{
      setHeading("Overview");
    },[])
  return (
    <div className='w-full h-full flex flex-wrap justify-between'>
        <SummarySection list={summaryList} className="border h-20 w-[60%] flex justify-evenly" />
        <SimpleTable/>
        <DonutGraph/>
        <BarGraph/>
    </div>
  )
}

export default Overview