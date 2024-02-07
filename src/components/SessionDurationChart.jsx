import { React, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  CartesianGrid,
} from "recharts";
import "./SessionDurationChart.scss";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          border: "1px solid #ccc",
        }}
      >
        <label>{`${label} : ${payload[0].value} min`}</label>
      </div>
    );
  }

  return null;
};

const SessionDurationChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Nouvel état pour l'index actif

  const handleMouseMove = (state) => {
    if (state.isTooltipActive) {
      setActiveIndex(state.activeTooltipIndex); // Mettre à jour l'état lorsque la souris est sur un point
    } else {
      setActiveIndex(null); // Réinitialiser lorsqu'elle n'est pas sur un point
    }
  };
  return (
    <div className="session-duration-chart">
      <ResponsiveContainer width={300} height={300}>
        <LineChart
          style={{ backgroundColor: "#FF0000" }}
          data={data}
          onMouseMove={handleMouseMove}
          margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 40,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={40}
            tickCount={7}
            tick={{ fill: "#fff", fontSize: 10 }}
            padding={{ left: 10, right: 10 }}
            minTickGap={1}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            type="number"
            domain={["dataMin", "dataMax + 30"]}
            hide="true"
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="natural"
            dataKey="activityDuration"
            stroke="#FFF"
            strokeWidth={1}
            dot={false}
            activeDot={{
              fill: "#fff",
              r: 5,
              strokeWidth: 10,
              strokeOpacity: 0.4,
            }}
          />
          {activeIndex !== null && (
            <ReferenceArea
              x1={data[activeIndex].day}
              x2={data[data.length - 1].day}
              strokeOpacity={0.3}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionDurationChart;
