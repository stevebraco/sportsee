import React from 'react';
import PropTypes from 'prop-types';
import {
  WelcomeContainer,
  WelcomePara,
  WelcomeTitle,
} from './WelcomeStyles';
/**
 * @param  {string} {name}
 * return  <Welcome name={data} />
 */
const Welcome = ({ name }) => {
  if (name === undefined) return '...loading';
  return (
    <WelcomeContainer>
      <WelcomeTitle>
        Bonjour
        <span className="welcome__name">{name}</span>
      </WelcomeTitle>
      <WelcomePara>
        Félicitation ! Vous avez explosé vos objectifs hier
        👏
      </WelcomePara>
    </WelcomeContainer>
  );
};

export default Welcome;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};