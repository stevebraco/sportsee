export const fetchName = ["user", "activity", "averageSessions", "performance"];

export const urls = (id) => {
  return [
    `http://localhost:3000/user/${id}`,
    `http://localhost:3000/user/${id}/activity`,
    `http://localhost:3000/user/${id}/average-sessions`,
    `http://localhost:3000/user/${id}/performance`,
  ];
};

export const dayWeekAverageSessions = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

export const subjectNamePerformance = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Energie",
  cardio: "Cardio",
};
