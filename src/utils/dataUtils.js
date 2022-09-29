import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '../data';

export const fetchName = [
  'user',
  'activity',
  'averageSessions',
  'performance',
];

/**
 * @return a array user's URL
 * @param  {string} id
 */
export const urls = (id) => [
  `http://localhost:3000/user/${id}`,
  `http://localhost:3000/user/${id}/activity`,
  `http://localhost:3000/user/${id}/average-sessions`,
  `http://localhost:3000/user/${id}/performance`,
];

/**
 * @return the local data as an object
 * @param  {string} id
 */
export const dataLocal = (id) => {
  const dataLocale = [
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
  ];
  const dataState = {};

  const findId = dataLocale.map((data) =>
    data.find(
      (user) => user.id === +id || user.userId === +id
    )
  );

  findId.map((item, index) => {
    dataState[fetchName[index]] = item;
    return dataState;
  });

  return dataState;
};

/**
 * array data convert in object
 * @param  {array} returnedDataUser
 * @return a object
 */
export const dataStateObject = (returnedDataUser) => {
  const dataState = {};
  returnedDataUser.map(
    (item, index) =>
      (dataState[fetchName[index]] = item.data.data)
  );
  return dataState;
};
