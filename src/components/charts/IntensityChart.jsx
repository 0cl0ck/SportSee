import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const IntensityChart = ({ data }) => {
  return (
    <div
      style={{ background: "#333", borderRadius: "5px" }}
      className="intensity-chart"
    >
      <ResponsiveContainer width={258} height={263}>
        <RadarChart cx="60%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#fff", fontSize: 16 }}
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
