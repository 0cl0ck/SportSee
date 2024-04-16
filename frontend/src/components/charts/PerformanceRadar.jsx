import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PerformanceRadar = ({ data }) => {
  const [tickFontSize, setTickFontSize] = useState("12px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setTickFontSize("14px");
      } else {
        setTickFontSize("10px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{ background: "#333", borderRadius: "5px" }}
      className="performance-radar"
    >
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
          <PolarGrid stroke="#fff" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#fff", fontSize: tickFontSize }}
          />
          <Radar
            dataKey="value"
            stroke="#ff0000"
            fill="#ff0000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceRadar.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PerformanceRadar;
