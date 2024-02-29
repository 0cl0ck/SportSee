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

import useResponsiveChart from "../../hooks/resize/useResponsiveDimensions";

function DailyActivityChart({ data }) {
  const { width, height } = useResponsiveChart("100%", 250, "100%", 200);

  return (
    <div className="daily-activity-chart">
      <ResponsiveContainer width={width} height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="top"
            align="center"
          />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="calories"
            fill="#FF0000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="poids"
            fill="#000000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivityChart;
