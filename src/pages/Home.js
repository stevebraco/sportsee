import React from 'react';
import { useParams } from 'react-router';
import Welcome from '../components/Welcome/Welcome';
import useFetch from '../hooks/useFetch';
import Charts from '../components/Charts/Charts';
import ErrorPage from './ErrorPage';
/**
 * return a component <Home />
 */
const Home = () => {
  const { id } = useParams();

  const { userData, loading } = useFetch(id);

  if (loading) return 'loading...';
  if (userData.user === undefined) return <ErrorPage />;

  return (
    <>
      <Welcome name={userData.user.userInfos.firstName} />
      <Charts {...userData} />
    </>
  );
};

export default Home;
