import React, { useEffect } from 'react'
import { useHeading } from '../../hooks/layout/UseHeading'
import SummarySection from '../../components/common/SummarySection/SummaySection';
import { useSelector } from 'react-redux';
import { selectIncomeSources, selectInsights } from '../../store/Slices/Transaction/transactionSelector';
import DonutChartComponent from '../../components/common/GraphsAndCharts/DonutChart/DonutChart';
import BarChartComponent from '../../components/common/GraphsAndCharts/BarChart/BarChart';
import MultilineChartComponent from '../../components/common/GraphsAndCharts/LineChart/MultilineChart';

function Insight() {
  const {setHeading,setSubheading} = useHeading()
  const {savingsRate, topCategory, monthOvermonthDiff, largestExpense, currentMonth} = useSelector(selectInsights)
  const insightList = [
    {"id":"1","name":"Top Spending Category","value":topCategory.name, "amount":topCategory.amount},
    {"id":"2","name":"Month Comparison","value":monthOvermonthDiff},
    {"id":"3","name":"Savings Rate","value":savingsRate},
    {"id":"4","name":"Largest Single Expense","value":largestExpense.category},
  
  ]

  useEffect(()=>{
    setHeading("Insight");
    setSubheading("This month at glance")
  },[])

  const donutData = useSelector(selectIncomeSources);
  return (
    <div className='h-full p-5 flex flex-wrap gap-5 overflow-auto'>
      <SummarySection className="flex justify-between w-full h-[20%]" cardClass="bg-(--panel-background) rounded-lg w-[23%] flex flex-col justify-center gap-2 items-center" list={insightList}/>
      <DonutChartComponent data={donutData}/>
      <BarChartComponent/>
      <MultilineChartComponent/>
    </div>
  )
}

export default Insight