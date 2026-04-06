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
    const {setHeading} = useHeading()
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
    },[])
  return (
    <div className='w-full h-full flex flex-wrap justify-between'>
        <SummarySection list={summaryList} className="border h-20 w-[60%] flex justify-evenly" />
        <SimpleTable/>
        <DonutChartComponent data={donutData}/>
        <LineChartComponent data={lineChartData}/>
    </div>
  )
}

export default Overview