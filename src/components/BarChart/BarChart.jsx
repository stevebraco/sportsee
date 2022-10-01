import React from 'react';
import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ContainerStyles } from './BarChartStyles';
import {
  CustomizedCursor,
  CustomizedLegend,
  dataBarChart,
  tooltipContentStyle,
  tooltipFormatter,
  tooltipItemStyle,
  tooltipLabelStyle,
} from './BarChartUtils';

/**
 * Component for showing daily activity as a barchart
 * @param  {Array} {userActivity} information about weight and calories burned
 * @return <SimpleBarChart userActivity={activity.sessions} />
 */
const SimpleBarChart = ({ userActivity }) => {
  const data = dataBarChart(userActivity);

  return (
    <ContainerStyles>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={8}
          margin={{
            top: 24,
            right: 30,
            bottom: 23,
            left: 43,
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
            tickSize={15}
            padding={{ left: -35, right: -35 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kg"
            orientation="right"
            domain={['dataMin - 1', 'dataMax + 2']}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
            tickSize={45}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="cal"
            dataKey="kCal"
            domain={[0, 'dataMax + 50']}
            hide
          />
          <Tooltip
            cursor={<CustomizedCursor />}
            contentStyle={tooltipContentStyle}
            itemStyle={tooltipItemStyle}
            labelStyle={tooltipLabelStyle}
            formatter={tooltipFormatter}
          />
          <Legend
            verticalAlign="top"
            align="right"
            height={50}
            content={<CustomizedLegend />}
          />
          <Bar
            yAxisId="kg"
            dataKey="kg"
            name="Poids (kg)"
            fill="#282D30"
            legendType="circle"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="kCal"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            legendType="circle"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ContainerStyles>
  );
};

export default SimpleBarChart;

SimpleBarChart.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
