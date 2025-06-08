import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Örnek veri
const data = [
  { name: "Mon", orders: 80 },
  { name: "Tue", orders: 120 },
  { name: "Wed", orders: 90 },
  { name: "Thu", orders: 150 },
  { name: "Fri", orders: 100 },
  { name: "Sat", orders: 170 },
];

function TotalOrdersChart() {
  return (
    <div className="w-full h-32">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#ffffff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TotalOrdersChart;
