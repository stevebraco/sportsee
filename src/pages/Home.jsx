import React from 'react';
import { useParams } from 'react-router';
import Welcome from '../components/Welcome/Welcome';
import useFetch from '../hooks/useFetch';
import Charts from '../components/Charts/Charts';
import ErrorPage from './ErrorPage';
import Loading from '../components/Loading/Loading';

/**
 * Component for showing details of the user
 * return (<Home />)
 */
const Home = () => {
  const { id } = useParams();

  const { userData, loading, error } = useFetch(id);

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <>
      <Welcome name={userData.user.userInfos.firstName} />
      <Charts {...userData} />
    </>
  );
};

export default Home;
