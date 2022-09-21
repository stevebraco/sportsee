import React from 'react';
import PropTypes from 'prop-types';
import {
  Cell,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
} from 'recharts';
import {
  PieChartStyles,
  TextObjective,
  TextValue,
} from './PieChartStyles';
import dataTodayScore from './PieChartUtils';
/**
 * Component for showing average score as a pie chart
 * @param  {} {todayScore} general user information.
 *  * return a number

 */
const SimplePieChart = ({ todayScore }) => {
  const data = dataTodayScore(todayScore);

  const COLORS = ['#E60000', '#FBFBFB'];

  return (
    <PieChartStyles>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={230}
            endAngle={-180}
            minAngle={150}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.toString()}`}
                fill={COLORS[index]}
                cornerRadius="50%"
              />
            ))}

            <Label
              content={
                <CustomLabel
                  labelText="ICPs"
                  value={todayScore * 100}
                />
              }
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </PieChartStyles>
  );
};

const CustomLabel = ({ viewBox, value }) => {
  const { cx, cy } = viewBox;
  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r="71"
        strokeWidth="3"
        fill="#ffffff"
      />
      <g>
        <TextValue x={cx} y={cy}>
          {`${value}%`}
        </TextValue>
        <TextObjective x={cx} y={cy + 25}>
          de votre
        </TextObjective>
        <TextObjective x={cx} y={cy + 47}>
          objectif
        </TextObjective>
      </g>
    </>
  );
};

export default SimplePieChart;

SimplePieChart.propTypes = {
  todayScore: PropTypes.number.isRequired,
};
CustomLabel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  viewBox: PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
  }),
  value: PropTypes.number.isRequired,
};
