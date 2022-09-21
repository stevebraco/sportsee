export const subjectNamePerformance = {
  intensity: 'Intensité',
  speed: 'Vitesse',
  strength: 'Force',
  endurance: 'Endurance',
  energy: 'Energie',
  cardio: 'Cardio',
};
/**
 * @param  {array} performance
 * @param  {object} kind
 * return a array of user's performance
 */
export const dataPerformance = (performance, kind) =>
  performance
    ?.sort((a, b) => b.kind - a.kind)
    ?.map((data) => ({
      subject: subjectNamePerformance[kind[data.kind]],
      value: data.value,
    }));
