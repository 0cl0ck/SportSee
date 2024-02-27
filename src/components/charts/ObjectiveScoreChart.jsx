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

const RadialScoreChart = ({ data }) => {
  return (
    <div className="objective-score-chart">
      <ResponsiveContainer width={258} height={263}>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="83%"
          barSize={8}
          startAngle={90}
          endAngle={450}
          data={data}
          cx="55%"
          cy="45%"
        >
          <circle cx="55%" cy="40%" fill="white" r="80"></circle>
          <PolarAngleAxis
            type="number"
            dataKey="value"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="value" cornerRadius={10} fill="#ff0000" />
          <text
            x="55%"
            y="40%"
            textAnchor="middle"
            className="scoreContainer__score"
          >
            12%
          </text>
          //!TODO: Replace 12% with data
          <text
            x="55%"
            y="50%"
            textAnchor="middle"
            fill={"#74798C"}
            className="scoreContainer__your"
          >
            de votre
          </text>
          <text
            x="55%"
            y="60%"
            textAnchor="middle"
            fill={"#74798C"}
            className="scoreContainer__your"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialScoreChart;
