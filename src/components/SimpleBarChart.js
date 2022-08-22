import React from "react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

//TODO: gerer l'axe y
//TODO: le texte "activité quotidienne"

const SimpleBarChart = ({ userActivity }) => {
  const dataTest = userActivity?.map((data) => ({
    //XAsis jour de la semaine
    name: new Date(data.day).getUTCDate(),
    kCal: data.calories,
    kg: data.kilogram,
  }));

  return (
    <ResponsiveContainer width={835} height={300}>
      <BarChart data={dataTest}>
        <CartesianGrid vertical={false} strokeDasharray="4" />
        <XAxis dataKey="name" tickLine={false} />
        <YAxis
          dataKey="kg"
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          label={10}
          contentStyle={{
            background: "red",
            width: "60px",
            height: "70px",
            color: "white",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          itemStyle={{ color: "white" }}
          labelStyle={{ display: "none" }}
          formatter={(value, entry) => {
            const format = () => {
              if (entry.includes("kg")) {
                return "kg";
              }
              if (entry.includes("kCal")) {
                return "kCal";
              }
            };
            return [`${value} ${format()}`];
          }}
        />
        <Legend verticalAlign="top" align="right" height={50} />
        <Bar
          dataKey="kg"
          name="Poids (kg)"
          fill="#282D30"
          legendType="circle"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="kCal"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          legendType="circle"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
