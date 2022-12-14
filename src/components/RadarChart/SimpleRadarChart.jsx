import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts';
import RadarChartStyles from './RadarChartStyles';
import { dataPerformance } from './RadarChartUtils';

/**
 * Component for showing type of activity as a radarchart
 * @param  {Array} {performance} information about calories
 * @param  {Object} {kind} information about type of effort
 * @return <SimpleRadarChart performance={performance.data} kind={performance.kind} />
 */
const SimpleRadarChart = ({ performance, kind }) => {
  const data = dataPerformance(performance, kind);

  return (
    <RadarChartStyles>
      <RadarChart
        data={data}
        outerRadius={80}
        width={215}
        height={263}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          stroke="white"
          tickLine={false}
          dy={3}
          style={{ fontSize: '8px' }}
        />
        <Radar
          dataKey="value"
          fill="#FF0000"
          fillOpacity={0.7}
        />
      </RadarChart>
    </RadarChartStyles>
  );
};

export default SimpleRadarChart;

SimpleRadarChart.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    })
  ).isRequired,
  kind: PropTypes.objectOf(PropTypes.string).isRequired,
};
