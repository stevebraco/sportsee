import {
  BadgeStyles,
  BadgeValueStyles,
  CustomizedLegendStyles,
} from "./BarChartStyles";

export const dataBarChart = (userActivity) => {
  return userActivity?.map((data) => ({
    //XAsis jour de la semaine
    name: new Date(data.day).getUTCDate(),
    kCal: data.calories,
    kg: data.kilogram,
  }));
};

export const tooltipContentStyle = {
  background: "red",
  width: "60px",
  height: "70px",
  color: "white",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
};

export const tooltipItemStyle = { color: "white" };

export const tooltipLabelStyle = { display: "none" };

export const tooltipFormatter = (value, entry) => [
  `${value} ${entry.includes("kg") ? "kg" : "kCal"}`,
];

export const CustomizedLegend = ({ payload }) => (
  <CustomizedLegendStyles>
    <h2>Activité quotidienne</h2>
    <div>
      {payload.map(({ value }, index) => (
        <BadgeValueStyles key={index}>
          <BadgeStyles value={value} />
          {value}
        </BadgeValueStyles>
      ))}
    </div>
  </CustomizedLegendStyles>
);

export const CustomizedCursor = ({ brushBottom, payloadIndex, ...rest }) => {
  rest.fill = "#C4C4C480";
  rest.width = 80;
  return <rect {...rest} />;
};
