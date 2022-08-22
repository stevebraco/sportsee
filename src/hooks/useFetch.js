import axios from "axios";
import { useEffect, useState } from "react";
import { fetchName, urls } from "../utils/dataUtils";

const useFetch = (id) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      Promise.all(
        urls(id).map(async (url) => {
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
    };
    fetchData();
  }, [id]);

  return { userData, loading };
};

export default useFetch;
