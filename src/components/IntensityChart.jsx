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
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid gridType="polygon" stroke="#fff" strokeOpacity={0.2} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#fff", fontSize: 10 }}
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
