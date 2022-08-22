import React from "react";
import { useParams } from "react-router";
import Nutriment from "../components/Nutriment";
import PieCharts from "../components/PieCharts";
import SimpleBarChart from "../components/SimpleBarChart";
import SimpleLineChart from "../components/SimpleLineChart";
import SimpleRadarChart from "../components/SimpleRadarChart";
import Welcome from "../components/Welcome";
import useFetch from "../hooks/useFetch";

const Home = () => {
  // TODO: USer Storie #3
  const { id } = useParams();

  const { userData, loading } = useFetch(id);

  if (loading) return "loading...";

  return (
    <div>
      <Welcome name={userData.user.userInfos.firstName} />
      <div className="test-flex">
        <div>
          <SimpleBarChart userActivity={userData.activity.sessions} />
          <div className="container-chart">
            <SimpleLineChart
              userAverageSessions={userData.averageSessions.sessions}
            />
            <SimpleRadarChart
              performance={userData.performance?.data}
              kind={userData.performance.kind}
            />
            <PieCharts todayScore={userData.user.todayScore} />
          </div>
        </div>
        <div>
          <Nutriment
            img={"./images/calories.svg"}
            number={userData.user.keyData.calorieCount}
            unity={"kCal"}
            name={"Calories"}
          />
          <Nutriment
            img={"./images/protein.svg"}
            number={userData.user.keyData?.proteinCount}
            unity={"g"}
            name={"Proteines"}
          />
          <Nutriment
            img={"./images/glucides.svg"}
            number={userData.user.keyData.carbohydrateCount}
            unity={"g"}
            name={"Glucides"}
          />
          <Nutriment
            img={"./images/lipides.svg"}
            number={userData.user.keyData.lipidCount}
            unity={"g"}
            name={"Lipides"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
