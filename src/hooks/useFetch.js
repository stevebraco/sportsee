import axios from "axios";
import { useEffect, useState } from "react";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data";
import { dataLocal, fetchName, findId, urls } from "../utils/dataUtils";

const useFetch = (urlId) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (process.env.REACT_APP_USE_MOCK_VALUE === "true") {
        const data = dataLocal(urlId);
        setUserData(data);
        setLoading(false);
      } else {
        Promise.all(
          urls(urlId).map(async (url) => {
            return await axios(url);
          })
        )
          .then((data) => {
            let dataState = {};
            data.map((item, index) => {
              return (dataState[fetchName[index]] = item.data.data);
            });
            setUserData(dataState);
            setLoading(false);
            return;
          })
          .catch((err) => console.log(err));
      }
    };
    fetchData();
  }, [urlId]);

  return { userData, loading };
};

export default useFetch;
