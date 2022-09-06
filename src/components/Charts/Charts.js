import React from "react";
import SimpleBarChart from "../BarChart/BarChart";
import SimpleLineChart from "../LineChart/SimpleLineChart";
import Nutriments from "../Nutriments/Nutriments";
import SimplePieChart from "../PieChart/SimplePieChart";
import SimpleRadarChart from "../RadarChart/SimpleRadarChart";
import { ContainerChart, WrapperChart } from "./ChartsStyles";

const Charts = ({ user, activity, averageSessions, performance }) => {
  return (
    <ContainerChart>
      <div>
        <SimpleBarChart userActivity={activity.sessions} />
        <WrapperChart>
          <SimpleLineChart userAverageSessions={averageSessions.sessions} />
          <SimpleRadarChart
            performance={performance?.data}
            kind={performance.kind}
          />
          <SimplePieChart todayScore={user.todayScore || user.score} />
        </WrapperChart>
      </div>
      <Nutriments userData={user.keyData} />
    </ContainerChart>
  );
};

export default Charts;
