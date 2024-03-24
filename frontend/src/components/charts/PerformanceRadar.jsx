import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceRadar = ({ data }) => {
  return (
    <div
      style={{ background: "#333", borderRadius: "5px" }}
      className="performance-radar"
    >
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#fff", fontSize: 14 }}
          />
          <Radar
            dataKey="value"
            stroke="#ff0000"
            fill="#ff0000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadar;
