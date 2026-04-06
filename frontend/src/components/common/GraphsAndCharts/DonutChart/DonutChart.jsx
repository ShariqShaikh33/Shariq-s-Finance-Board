import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { selectSpendingByCategory } from "../../../../store/Slices/Transaction/transactionSelector";

const COLORS = ["#6366f1","#22c55e","#ef4444","#f59e0b","#3b82f6","#ec4899","#14b8a6","#f97316","#8b5cf6","#06b6d4"];

const DonutChartComponent = (props) => {
  const {data} = props;

  return (
    <ResponsiveContainer width="50%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          paddingAngle={3}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChartComponent;