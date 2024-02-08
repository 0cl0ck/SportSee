import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./SessionDurationChart.scss";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "17px",
          border: "1px solid #ccc",
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
    // Get the width of the chart for the cursor calculation
    setContainerWidth(e.containerWidth);
  };

  return (
    <div className="session-duration-chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 30, right: 0, left: 0, bottom: 40 }}
          style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}
          onMouseEnter={handleChartReady}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "#fff", fontSize: 12 }}
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
          <Line
            type="natural"
            dataKey="activityDuration"
            stroke="#FFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "#fff",
              r: 5,
              strokeWidth: 2,
              strokeOpacity: 0.3,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionDurationChart;
