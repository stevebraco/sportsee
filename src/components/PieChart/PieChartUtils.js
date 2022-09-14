/**
 * @param  {number} todayScore
 * return a array
 */
const dataTodayScore = (todayScore) => [
  { value: todayScore },
  { value: 1 - todayScore },
];

export default dataTodayScore;
