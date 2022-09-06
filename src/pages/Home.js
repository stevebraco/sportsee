import React from "react";
import { useParams } from "react-router";
import Welcome from "../components/Welcome/Welcome";
import useFetch from "../hooks/useFetch";
import Charts from "../components/Charts/Charts";

const Home = () => {
  const { id } = useParams();

  const { userData, loading } = useFetch(id);

  if (loading) return "loading...";

  return (
    <>
      <Welcome name={userData.user.userInfos.firstName} />
      <Charts {...userData} />
    </>
  );
};

export default Home;
