import React from 'react';
import PropTypes from 'prop-types';
import SimpleBarChart from '../BarChart/BarChart';
import SimpleLineChart from '../LineChart/SimpleLineChart';
import Nutriments from '../Nutriments/Nutriments';
import SimplePieChart from '../PieChart/SimplePieChart';
import SimpleRadarChart from '../RadarChart/SimpleRadarChart';
import {
  ContainerChart,
  WrapperChart,
} from './ChartsStyles';

/**
 * Component for showing the perfomce of the user with recharts
 * @param  {} {user} general user information.
 * @param  {} {activity} information about weight and calories burned.
 * @param  {} {averageSessions} information on the average duration of sessions.
 * @param  {} {performance} information about calories
 * return a component <Charts {...userData} />
 */
const Charts = ({
  user,
  activity,
  averageSessions,
  performance,
}) => (
  <ContainerChart>
    <div>
      <SimpleBarChart userActivity={activity.sessions} />
      <WrapperChart>
        <SimpleLineChart
          userAverageSessions={averageSessions.sessions}
        />
        <SimpleRadarChart
          performance={performance.data}
          kind={performance.kind}
        />
        <SimplePieChart
          todayScore={user.todayScore || user.score}
        />
      </WrapperChart>
    </div>
    <Nutriments userData={user.keyData} />
  </ContainerChart>
);

export default Charts;

Charts.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userInfos: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }),
    todayScore: PropTypes.number.isRequired,
    score: PropTypes.number,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
  activity: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
  averageSessions: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
  performance: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.shape({
      1: PropTypes.string.isRequired,
      2: PropTypes.string.isRequired,
      3: PropTypes.string.isRequired,
      4: PropTypes.string.isRequired,
      5: PropTypes.string.isRequired,
      6: PropTypes.string.isRequired,
    }).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
