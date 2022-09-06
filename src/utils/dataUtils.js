import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data";

export const fetchName = ["user", "activity", "averageSessions", "performance"];

export const urls = (id) => {
  return [
    `http://localhost:3000/user/${id}`,
    `http://localhost:3000/user/${id}/activity`,
    `http://localhost:3000/user/${id}/average-sessions`,
    `http://localhost:3000/user/${id}/performance`,
  ];
};

export const dataLocal = (id) => {
  const dataLocale = [
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
  ];
  let dataState = {};

  const findId = dataLocale.map((data) =>
    data.find((user) => user.id === +id || user.userId === +id)
  );

  findId.map((item, index) => {
    return (dataState[fetchName[index]] = item);
  });

  return dataState;
};
