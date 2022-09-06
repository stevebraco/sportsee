export const dataLineChart = (userAverageSessions) => {
  return userAverageSessions?.map((data) => {
    return {
      day: dayWeekAverageSessions[data.day],
      sessionLength: data.sessionLength,
    };
  });
};

const dayWeekAverageSessions = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

export const tooltipContentStyle = {
  background: "#ffffff",
  fontSize: "10px",
  fontWeight: "bold",
};
export const tooltiplabelStyle = { display: "none" };

export const tooltipitemStyle = { color: "#000000" };

export const tooltipFormatter = (value) => [`${value} min`];

export const LineActiveDot = {
  stroke: "rgba(255,255,255, 0.6)",
  strokeWidth: 10,
  r: 5,
};
