import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import useResponsiveChart from "../../hooks/resize/useResponsiveDimensions";

const IntensityChart = ({ data }) => {
  const { width, height } = useResponsiveChart(258, 263, 200, 200);

  return (
    <div
      style={{ background: "#333", borderRadius: "5px" }}
      className="intensity-chart"
    >
      <ResponsiveContainer width={width} height={height}>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#fff", fontSize: 14 }}
          />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#ff0000"
            fill="#ff0000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IntensityChart;
