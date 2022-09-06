import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { subjectNamePerformance } from "../../utils/dataUtils";
import { RadarChartStyles } from "./RadarChartStyles";
import { dataPerformance } from "./RadarChartUtils";

// TODO: Ajout des traits dans le losange, l'espace de la légende

const SimpleRadarChart = ({ performance, kind }) => {
  const data = dataPerformance(performance, kind);

  return (
    <RadarChartStyles>
      <RadarChart outerRadius={80} width={225} height={263} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          stroke={"white"}
          tickLine={false}
          dy={4}
          style={{ fontSize: "10px" }}
        />
        <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
      </RadarChart>
    </RadarChartStyles>
  );
};

export default SimpleRadarChart;
