import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  dataLocal,
  fetchName,
  urls,
} from '../utils/dataUtils';

/**
 * @param  {string} urlId
 * fetch the data
 * return a object
 */
const useFetch = (urlId) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (process.env.REACT_APP_USE_MOCK_VALUE === 'true') {
        const data = dataLocal(urlId);
        setUserData(data);
        setLoading(false);
      } else {
        Promise.all(
          urls(urlId).map(async (url) => {
            await axios(url);
          })
        )
          .then((data) => {
            const dataState = {};
            data.map((item, index) => {
              dataState[fetchName[index]] = item.data.data;
              return dataState;
            });
            setUserData(dataState);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }
    };
    fetchData();
  }, [urlId]);

  return { userData, loading };
};

export default useFetch;
