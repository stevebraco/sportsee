import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { LineChartStyles, LineTitleStyles } from "./LineChartStyles";
import {
  dataLineChart,
  LineActiveDot,
  tooltipContentStyle,
  tooltipFormatter,
  tooltipitemStyle,
  tooltiplabelStyle,
} from "./LineChartUtils";

// TODO: Hover, couleur de la légende, texte Durée moyenne sessions.

const SimpleLineChart = ({ userAverageSessions }) => {
  const data = dataLineChart(userAverageSessions);

  return (
    <LineChartStyles>
      <LineTitleStyles>
        <h2>Durée moyenne des sessions</h2>
      </LineTitleStyles>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 0, left: 5, bottom: -40 }}
        >
          <CartesianGrid stroke="#FF0000" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke={"white"}
            tickSize={-40}
            tick={{
              fontSize: 12,
              fontWeight: 500,
              fill: "rgba(255, 255, 255, .7)",
            }}
            padding={{ left: 2, right: 5, bottom: 0 }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={["dataMin - 60", "dataMax + 60"]}
            hide={true}
          />

          <Tooltip
            label={10}
            contentStyle={tooltipContentStyle}
            itemStyle={tooltipitemStyle}
            labelStyle={tooltiplabelStyle}
            formatter={tooltipFormatter}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
            strokeWidth={2}
            activeDot={LineActiveDot}
          />
        </LineChart>
      </ResponsiveContainer>
    </LineChartStyles>
  );
};

export default SimpleLineChart;
