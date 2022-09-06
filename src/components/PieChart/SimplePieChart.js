import React from "react";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import { PieChartStyles, TextObjective, TextValue } from "./PieChartStyles";
import { dataTodayScore } from "./PieChartUtils";

const SimplePieChart = ({ todayScore }) => {
  const data = dataTodayScore(todayScore);

  const COLORS = ["#19ff00", "#E60000"];

  const CustomLabel = ({ viewBox, labelText, value }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <circle cx={cx} cy={cy} r="71" strokeWidth="3" fill="#ffffff" />
        <g>
          <TextValue x={cx} y={cy}>
            {value}%
          </TextValue>
          <TextObjective x={cx} y={cy + 25}>
            de votre
          </TextObjective>
          <TextObjective x={cx} y={cy + 47}>
            objectif
          </TextObjective>
        </g>
      </>
    );
  };

  return (
    <PieChartStyles>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={230}
            endAngle={-180}
            minAngle={150}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                cornerRadius="50%"
              />
            ))}

            <Label
              content={
                <CustomLabel labelText="ICPs" value={todayScore * 100} />
              }
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </PieChartStyles>
  );
};

export default SimplePieChart;
