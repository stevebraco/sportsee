import React from "react";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";

const PieCharts = ({ todayScore }) => {
  const data01 = [
    { name: "Active Campagins", value: 88 },
    { name: "ICPs with no campagins", value: 12 },
  ];

  const COLORS = ["#FBFBFB", "#E60000"];

  const CustomLabel = ({ viewBox, labelText, value }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontSize="15"
        >
          {value}%
        </text>
        <text
          x={cx}
          y={cy + 20}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fill="#0088FE"
          fontSize="26"
          fontWeight="600"
        >
          de votre objectif
        </text>
      </g>
    );
  };

  return (
    <div style={{ width: "268px", height: 263 }}>
      <ResponsiveContainer>
        <PieChart style={{ background: "#FBFBFB" }}>
          <Pie
            data={data01}
            dataKey="value"
            innerRadius={80}
            outerRadius={100}
            cornerRadius={40}
            startAngle={0}
            endAngle={180}
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              content={
                <CustomLabel labelText="ICPs" value={todayScore * 100} />
              }
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
