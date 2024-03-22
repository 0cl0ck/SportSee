import React, { useState } from "react";
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

// Custom cursor component
const CustomCursor = (props) => {
  const { height, points, width } = props;
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

const SessionDurationChart = ({ data }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleChartReady = (e) => {
    setContainerWidth(e.containerWidth);
  };

  return (
    <div className="session-duration-chart">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 80, right: 0, left: 0, bottom: 40 }}
          style={{
            backgroundColor: "#FF0000",
            borderRadius: "5px",
          }}
          onMouseEnter={handleChartReady}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ fill: "#ff8080", fontSize: 14 }}
            padding={{ left: 10, right: 10 }}
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
            dataKey="activityDuration"
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

export default SessionDurationChart;
