import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../../sass/components/_dailyActivityChart.scss";
import { CartesianGrid } from "recharts";

function DailyActivityChart({ data }) {
  return (
    <div className="barChart">
      <div className="barChart__title">Activité quotidienne</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={8}
          barSize={7}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tickCount={7}
            dataKey="day"
          />
          <YAxis
            yAxisId="kilogram"
            type="number"
            orientation="right"
            axisLine={false}
            tickLine={false}
            dataKey="kilogram"
            stroke="#9B9EAC"
            domain={["dataMin -5", "dataMax +15"]}
          />
          <YAxis
            yAxisId="calories"
            type="number"
            domain={["dataMin -160", "dataMax +15"]}
            hide
          />
          <Tooltip />
          <Legend
            iconType="circle"
            iconSize={8}
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              top: 0,
              right: 80,
              marginBottom: "20px",
            }}
            formatter={(value) => (
              <span className="barChart__textColorLegend">{value}</span>
            )}
          />
          <Bar
            barSize={7}
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282d30"
            radius={[10, 10, 0, 0]}
            yAxisId="kilogram"
          />
          <Bar
            barSize={7}
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            yAxisId="calories"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivityChart;
