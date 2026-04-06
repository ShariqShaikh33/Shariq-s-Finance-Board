import React, { useEffect } from 'react'
import { useHeading } from '../../hooks/layout/UseHeading';
import SummarySection from '../../components/common/SummarySection/SummaySection';
import SimpleTable from '../../components/Overview/SimpleTable/SimpleTable';
import { selectBalanceTrend, selectSpendingByCategory, selectSummaryCards } from '../../store/Slices/Transaction/transactionSelector';
import { useSelector } from 'react-redux';
import LineChartComponent from '../../components/common/GraphsAndCharts/LineChart/LineChart';
import DonutChartComponent from '../../components/common/GraphsAndCharts/DonutChart/DonutChart';
import MultilineChartComponent from '../../components/common/GraphsAndCharts/LineChart/MultilineChart';

function Overview() {
    const {setHeading,setSubheading} = useHeading()
    const {totalBalance, totalIncome, totalExpenses} = useSelector(selectSummaryCards);

    const summaryList = [
    {"id":"1","name":"Balance","key":"totalBalance","value":totalBalance},
    {"id":"2","name":"Income","key":"totalIncome","value":totalIncome},
    {"id":"3","name":"Expense","key":"totalExpenses","value":totalExpenses}
]
    const donutData=useSelector(selectSpendingByCategory);
    const lineChartData = useSelector(selectBalanceTrend);
    useEffect(()=>{
      setHeading("Overview");
      setSubheading("Summary of your Transactions")
    },[])
  return (
    <div className='p-5 w-full flex flex-wrap gap-5 justify-between overflow-auto'>
        <div className='flex flex-col gap-5 justify-between items-center w-[60%]'>
          <SummarySection list={summaryList} className="h-30 w-full bg-(--background) flex justify-between" cardClass="bg-(--panel-background) rounded-lg w-[32%] flex flex-col justify-center gap-2 items-center "/>
          <SimpleTable/>  
        </div>
        <DonutChartComponent data={donutData}/>
        <LineChartComponent data={lineChartData}/>
    </div>
  )
}

export default Overview