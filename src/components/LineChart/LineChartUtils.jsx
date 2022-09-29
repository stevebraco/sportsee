const dayWeekAverageSessions = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
};
/**
 * @param  {Array} userAverageSessions
 * @return user's averageSessions data
 */
export const dataLineChart = (userAverageSessions) =>
  userAverageSessions?.map((data) => ({
    day: dayWeekAverageSessions[data.day],
    sessionLength: data.sessionLength,
  }));

export const tooltipContentStyle = {
  background: '#ffffff',
  fontSize: '10px',
  fontWeight: 'bold',
};
export const tooltiplabelStyle = { display: 'none' };

export const tooltipitemStyle = { color: '#000000' };

/**
 * @param  {string} value
 * @return a array
 */
export const tooltipFormatter = (value) => [`${value} min`];

export const LineActiveDot = {
  stroke: 'rgba(255,255,255, 0.6)',
  strokeWidth: 10,
  r: 5,
};
