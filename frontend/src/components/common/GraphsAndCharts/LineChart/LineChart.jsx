import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useSelector } from "react-redux";
import { selectBalanceTrend } from "../../../../store/Slices/Transaction/transactionSelector";

const LineChartComponent = (props) => {
  const {data} = props;

  return (
    <ResponsiveContainer width="100%" height={300} className="bg-(--panel-background) rounded-lg">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(v) => `₹${(v/1000).toFixed(0)}k`} />
        <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#6366f1"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;