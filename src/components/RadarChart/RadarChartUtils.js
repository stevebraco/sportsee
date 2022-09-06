export const dataPerformance = (performance, kind) => {
  return performance
    ?.sort((a, b) => b.kind - a.kind)
    ?.map((data) => {
      return {
        subject: subjectNamePerformance[kind[data.kind]],
        value: data.value,
      };
    });
};

export const subjectNamePerformance = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Energie",
  cardio: "Cardio",
};
