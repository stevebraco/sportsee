import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { subjectNamePerformance } from "../utils/dataUtils";

// TODO: Ajout des traits dans le losange, l'espace de la légende

const SimpleRadarChart = ({ performance, kind }) => {
  const dataPerformance = performance
    ?.sort((a, b) => b.kind - a.kind)
    ?.map((data) => {
      return {
        subject: subjectNamePerformance[kind[data.kind]],
        A: data.value,
      };
    });

  return (
    <RadarChart
      style={{ background: "#282D30" }}
      outerRadius={80}
      width={258}
      height={263}
      data={dataPerformance}
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey="subject"
        stroke={"white"}
        tickLine={false}
        style={{ fontSize: "12px" }}
      />
      <Radar
        dataKey="A"
        // stroke="#000000"
        fill="#FF0000"
        fillOpacity={0.7}
      />
    </RadarChart>
  );
};

export default SimpleRadarChart;
