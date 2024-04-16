import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

import "../../sass/components/_radialScoreChart.scss";

const RadialScoreChart = ({ data }) => {
  const scorePercentage =
    data && data.length > 0 ? (data[0].score * 100).toFixed(0) : 0;
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
            dataKey="score"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="score" cornerRadius={10} fill="#ff0000" />
          <text x="50%" y="40%" textAnchor="middle">
            {`${scorePercentage}%`}
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

RadialScoreChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RadialScoreChart;
