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
 * @param  {Array} {performance} information about calories
 * @param  {Object} {kind}
 * return <SimpleRadarChart performance={performance.data} kind={performance.kind} />
 */
const SimpleRadarChart = ({ performance, kind }) => {
  const data = dataPerformance(performance, kind);

  return (
    <RadarChartStyles>
      <RadarChart
        outerRadius={80}
        width={225}
        height={263}
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          stroke="white"
          tickLine={false}
          dy={4}
          style={{ fontSize: '10px' }}
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
