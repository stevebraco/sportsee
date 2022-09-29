// import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  dataLocal,
  dataStateObject,
  urls,
} from '../utils/dataUtils';
import getDataUser from '../utils/getDataUser';

/**
 * @param  {string} urlId user's url
 * fetch the user's data
 * @return a object
 */
const useFetch = (urlId) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (process.env.REACT_APP_USE_MOCK_VALUE === 'true') {
        const data = dataLocal(urlId);
        setUserData(data);
      } else {
        Promise.all(
          urls(urlId).map(async (url) => {
            const res = await getDataUser(url);
            return res;
          })
        )
          .then((returnedDataUser) => {
            const dataInObject = dataStateObject(returnedDataUser);
            setUserData(dataInObject);
          })
          .catch((err) => {
            setError(err.response.status);
          }).finally(() => setLoading(false));
      }
    };
    fetchData();
  }, [urlId]);

  return { userData, loading, error };
};

export default useFetch;
