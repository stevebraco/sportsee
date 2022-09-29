import axios from 'axios';

/**
 * @param  {string} url
 * fetch data API
 */
const getDataUser = (url) => axios.get(url);

export default getDataUser;
