import React from 'react';
import PropTypes from 'prop-types';
import {
  BadgeStyles,
  BadgeValueStyles,
  CustomizedLegendStyles,
} from './BarChartStyles';
/**
 * The source data, in which each element is an object.
 * @param  {Array} userActivity
 * @return a object of the name, Kcal, kg
 */
export const dataBarChart = (userActivity) =>
  userActivity?.map((data) => ({
    name: new Date(data.day).getUTCDate(),
    kCal: data.calories,
    kg: data.kilogram,
  }));

/**
 * the option is the custom react element of rendering tooltip
 */
export const tooltipContentStyle = {
  background: 'red',
  width: '60px',
  height: '70px',
  color: 'white',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
};

/**
 * tooltip content item
 */export const tooltipItemStyle = { color: 'white' };

export const tooltipLabelStyle = { display: 'none' };

/**
 * The formatter function of value in tooltip
 * @param  {string} value
 * @param  {string} entry
 * @return an array
 */
export const tooltipFormatter = (value, entry) => [
  `${value} ${entry.includes('kg') ? 'kg' : 'kCal'}`,
];

/**
 * @param  {Array} {payload}
 * render the legend's content
 */
export const CustomizedLegend = ({ payload }) => (
  <CustomizedLegendStyles>
    <h2>Activité quotidienne</h2>
    <div>
      {payload.map(({ value }) => (
        <BadgeValueStyles key={value.toString()}>
          <BadgeStyles value={value} />
          {value}
        </BadgeValueStyles>
      ))}
    </div>
  </CustomizedLegendStyles>
);

/**
 * The configuration of cursor
 * @param  {Number} {brushBottom}
 * @param  {Number} payloadIndex}
 * @param  {any} {...rest}
 * @return a object
 */
export const CustomizedCursor = ({
  brushBottom,
  payloadIndex,
  ...rest
}) => {
  rest.fill = '#C4C4C480';
  rest.width = 55;
  return <rect {...rest} />;
};

CustomizedLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      inactive: PropTypes.bool,
      dataKey: PropTypes.string,
      circle: PropTypes.string,
      color: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

CustomizedCursor.defaultProps = {
  brushBottom: undefined,
  payloadIndex: undefined,
};

CustomizedCursor.propTypes = {
  brushBottom: PropTypes.number,
  payloadIndex: PropTypes.number,
};
