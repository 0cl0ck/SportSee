import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../sass/components/_sessionDurationChart.scss";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
          width: "50px",
          fontSize: "12px",
        }}
      >
        <label>{`${payload[0].value} min`}</label>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

const CustomCursor = (props) => {
  const { points, width } = props;
  const x = points[0].x;
  return (
    <rect
      x={x}
      y={0}
      rx={5}
      width={width - x}
      height={300}
      fill="rgba(0, 0, 0, 0.2)"
    />
  );
};

CustomCursor.propTypes = {
  width: PropTypes.number,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
    })
  ),
};

const SessionDurationChart = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }
  // Ajouter des valeurs fictives au début et à la fin des données
  const extendedData = [
    { day: "", sessionLength: data[0].sessionLength }, // Valeur fictive au début
    ...data,
    { day: "", sessionLength: data[data.length - 1].sessionLength }, // Valeur fictive à la fin
  ];
  return (
    <div className="session-duration-chart">
      <ResponsiveContainer>
        <LineChart
          data={extendedData}
          margin={{ top: 80, right: 0, left: 0, bottom: 40 }}
          style={{
            backgroundColor: "#FF0000",
            borderRadius: "5px",
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ fill: "#ff8080", fontSize: 14 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            type="number"
            domain={["dataMin", "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff8080" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "#fff",
              r: 5,
              strokeWidth: 2,
              strokeOpacity: 0.3,
            }}
          />
          <text
            x="35%"
            y="20%"
            textAnchor="middle"
            className="session-duration-chart__text"
            fill="#ff8080"
          >
            Durée moyenne des
          </text>
          <text
            x="23%"
            y="30%"
            textAnchor="middle"
            className="session-duration-chart__text"
            fill="#ff8080"
          >
            sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

SessionDurationChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
};

export default SessionDurationChart;
