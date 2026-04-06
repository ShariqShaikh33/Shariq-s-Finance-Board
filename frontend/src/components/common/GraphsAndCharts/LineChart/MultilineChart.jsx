import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { selectCategoryTrend, selectSpendingByCategory } from "../../../../store/Slices/Transaction/transactionSelector";
import { useSelector } from "react-redux";

const COLORS = ["#6366f1","#22c55e","#ef4444","#f59e0b","#3b82f6"];

const MultilineChartComponent = () => {
  const data        = useSelector(selectCategoryTrend);
  const allCategory = useSelector(selectSpendingByCategory);

  // get top 5 categories by total spend
  const top5 = allCategory.slice(0, 5).map((c) => c.name);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(v) => `₹${(v/1000).toFixed(0)}k`} />
        <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
        <Legend />
        {top5.map((category, index) => (
          <Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={COLORS[index]}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultilineChartComponent;