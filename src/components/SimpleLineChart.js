import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  Legend,
} from "recharts";
import { dayWeekAverageSessions } from "../utils/dataUtils";

// TODO: Hover, couleur de la légende, texte Durée moyenne sessions.

const SimpleLineChart = ({ userAverageSessions }) => {
  const data = userAverageSessions?.map((data) => {
    return {
      day: dayWeekAverageSessions[data.day],
      sessionLength: data.sessionLength,
    };
  });

  return (
    <LineChart
      width={258}
      height={263}
      data={data}
      style={{ background: "#FF0000" }}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid stroke="#FF0000" />
      <XAxis dataKey="day" axisLine={false} tickLine={false} stroke={"white"} />
      <Tooltip
        label={10}
        contentStyle={{
          background: "#ffffff",
          fontSize: "10px",
          fontWeight: "bold",
        }}
        itemStyle={{ color: "#000000" }}
        labelStyle={{ display: "none" }}
        formatter={(value) => [`${value} min`]}
      />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#ffffff"
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
  );
};

export default SimpleLineChart;
