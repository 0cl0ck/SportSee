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

import "../../sass/components/_objectiveScoreChart.scss";
import useResponsiveChart from "../../hooks/resize/useResponsiveDimensions";

const RadialScoreChart = ({ data }) => {
  const { width, height } = useResponsiveChart(258, 263, 200, 200); // Exemple, ajustez selon les besoins

  return (
    <div className="objective-score-chart">
      <ResponsiveContainer width={width} height={height}>
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
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            className="scoreContainer__score"
          >
            12%
          </text>
          //!TODO: Replace 12% with data
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill={"#74798C"}
            className="scoreContainer__your"
          >
            de votre
          </text>
          <text
            x="50%"
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
