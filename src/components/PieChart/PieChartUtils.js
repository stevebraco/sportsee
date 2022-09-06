export const dataTodayScore = (todayScore) => {
  return [{ value: todayScore }, { value: 1 - todayScore }];
};
