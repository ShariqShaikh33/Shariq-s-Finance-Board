export const transactionSelector = (state) => state.Transaction;

const groupByMonth = (list) =>{
    if (!list || !Array.isArray(list)) return {};
    return list.reduce((acc, txn) => {
        const month = txn.date.slice(0, 7);
        if (!acc[month]){acc[month] = []}
        acc[month].push(txn);
        return acc;
    }, {});
}

const sumBy=(list,type)=>{
    const filtered = list.filter((t)=> t.type===type)
    const sum = filtered.reduce((sum,t)=> sum+t.amount, 0);
    return sum;
}



export const selectSummaryCards = (state)=>{
    const list = transactionSelector(state);
    const totalIncome = sumBy(list, "income");
    console.log("totalIncome",totalIncome)
    const totalExpenses = sumBy(list, "expense");
    const totalBalance = totalIncome - totalExpenses;
    return {totalBalance, totalIncome, totalExpenses}
}

export const mostRecentTransactions=(state)=>{
    const list = transactionSelector(state);
    const recentTransactions = [...list]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(-5);
    return {recentTransactions}
}

//Transaction
export const selectFilteredTransactions=(state)=>{
    const list = transactionSelector(state);
    // console.log("Transactions: ",list);
    const {searchbar, filterbytype,filterbycategory,sortBy,asc} = state.Search;
    let result = [...list];

    if(searchbar.trim()){
        const query = searchbar.toLowerCase();
        result = result.filter((t)=>
        t.description.toLowerCase().includes(query) || t.category.toLowerCase().includes(query)); 
        console.log("Result", result);
    }

    if(filterbytype==[]){
        
    }
    if(filterbytype!=[]){
        result = result.filter((t)=>filterbytype.includes(t.type));
    }

    if(filterbycategory!=[]){
        result = result.filter((t)=>filterbycategory.includes(t.category));
    }

    result.sort((a,b)=>{
        let valA = a[sortBy];
        let valB = b[sortBy];

        if (sortBy === "date") {
            valA = new Date(valA);
            valB = new Date(valB);
        }

        if (sortBy === "amount") {
            valA = Number(valA);
            valB = Number(valB);
        }

        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
    });

    if(asc=="Descending"){
        result.reverse();
    }

    return result;
}   

export const selectBalanceTrend = (state) => {
  const list   = transactionSelector(state);
  const sorted = [...list].sort((a, b) => new Date(a.date) - new Date(b.date));

  const monthLabels = { "2025-01": "Jan", "2025-02": "Feb", "2025-03": "Mar" };
  const grouped = groupByMonth(sorted);

  let runningBalance = 20000; // opening balance

  return Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, txns]) => {
      txns.forEach((t) => {
        runningBalance += t.type === "income" ? t.amount : -t.amount;
      });
      return { month: monthLabels[month] || month, balance: runningBalance };
    });
};

export const selectSpendingByCategory = (state) => {
  const list = transactionSelector(state);

  const categoryTotals = list
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  return Object.entries(categoryTotals)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};

export const selectCategoryTrend = (state) => {
  const list    = transactionSelector(state);
  const grouped = groupByMonth(list);

  const monthLabels = { "2025-01": "Jan", "2025-02": "Feb", "2025-03": "Mar" };

  return Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, txns]) => {
      const row = { month: monthLabels[month] || month };
      txns
        .filter((t) => t.type === "expense")
        .forEach((t) => {
          row[t.category] = (row[t.category] || 0) + t.amount;
        });
      return row;
    });
};





// Insights
export const selectInsights = (state)=>{
    const list = transactionSelector(state);
    console.log(list);
    const grouped = groupByMonth(list);
    console.log(grouped);
    const months = Object.keys(grouped).sort();

    const currentMonthKey = months[months.length-1];
    const previousMonthKey = months[months.length-2];

    const currentTransactions = grouped[currentMonthKey] || [];
    const previousTransactions = grouped[previousMonthKey] || [];

    const currentIncome = sumBy(currentTransactions, "income");
    const currentExpenses = sumBy(currentTransactions,"expense");

    const previousIncome = sumBy(previousTransactions, "income");
    const previousExpenses = sumBy(previousTransactions,"expense");

    const savingsRate = currentIncome > 0
        ? (((currentIncome - currentExpenses) / currentIncome) * 100).toFixed(1)
        : 0;

    const monthOvermonthDiff = currentExpenses - previousExpenses;

    const categoryTotals = currentTransactions.filter((t)=> t.type==="expense")
    .reduce((acc,t)=>{
        acc[t.category] = (acc[t.category]||0)+t.amount;
        return acc;
    },{});

    const topCategory = Object.entries(categoryTotals).sort(([, a],[ ,b])=> b-a)[0];

     const largestExpense = currentTransactions
    .filter((t) => t.type === "expense")
    .sort((a, b) => b.amount - a.amount)[0];

    return {
        savingsRate: Number(savingsRate),
        monthOvermonthDiff: Math.abs(monthOvermonthDiff),
        topCategory: topCategory ? { name: topCategory[0], amount: topCategory[1] } : null,
        largestExpense: largestExpense || null,
        currentMonth: currentMonthKey,
  };
}

export const selectIncomeSources = (state) => {
  const list = transactionSelector(state);

  const totals = list
    .filter((t) => t.type === "income")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  return Object.entries(totals)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};

export const selectMonthlySummary = (state) => {
  const list    = transactionSelector(state);
  const grouped = groupByMonth(list);

  const monthLabels = { "2025-01": "Jan", "2025-02": "Feb", "2025-03": "Mar" };

  return Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, txns]) => ({
      month: monthLabels[month] || month,
      income:   sumBy(txns, "income"),
      expenses: sumBy(txns, "expense"),
    }));
};
