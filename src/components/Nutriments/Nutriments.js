import React from 'react';
import PropTypes from 'prop-types';
import Nutriment from '../Nutriment/Nutriment';
import ContainerNutriments from './NutrimentsStyles';
/**
 * @param  {Object} {userData} user's data
 * return <Nutriments userData={user.keyData} />

 */
const Nutriments = ({ userData }) => (
  <ContainerNutriments>
    <Nutriment
      img="./images/calories.svg"
      number={userData.calorieCount}
      unity="kCal"
      name="Calories"
    />
    <Nutriment
      img="./images/protein.svg"
      number={userData.proteinCount}
      unity="g"
      name="Proteines"
    />
    <Nutriment
      img="./images/glucides.svg"
      number={userData.carbohydrateCount}
      unity="g"
      name="Glucides"
    />
    <Nutriment
      img="./images/lipides.svg"
      number={userData.lipidCount}
      unity="g"
      name="Lipides"
    />
  </ContainerNutriments>
);

export default Nutriments;

Nutriments.propTypes = {
  userData: PropTypes.objectOf(PropTypes.number).isRequired,
};
