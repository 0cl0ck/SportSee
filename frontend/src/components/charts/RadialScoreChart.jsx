import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Legend,
  Text,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../sass/components/_radialScoreChart.scss";

const RadialScoreChart = ({ data }) => {
  return (
    <div className="radial-score-chart">
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="83%"
          barSize={8}
          startAngle={90}
          endAngle={450}
          data={data}
          cx="50%"
          cy="50%"
        >
          <circle cx="50%" cy="50%" fill="white" r="80"></circle>
          <PolarAngleAxis
            type="number"
            dataKey="value"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="value" cornerRadius={10} fill="#ff0000" />
          <text x="50%" y="40%" textAnchor="middle">
            12%
          </text>
          <text x="50%" y="50%" textAnchor="middle" fill={"#74798C"}>
            de votre
          </text>
          <text x="50%" y="60%" textAnchor="middle" fill={"#74798C"}>
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialScoreChart;
