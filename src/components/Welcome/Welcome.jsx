import React from 'react';
import PropTypes from 'prop-types';
import {
  WelcomeContainer,
  WelcomePara,
  WelcomeTitle,
} from './WelcomeStyles';

/**
 * Component for showing the user's name
 * @param  {string} {name} First Name of the user
 * return  <Welcome name={data} />
 */
const Welcome = ({ name }) => (
  <WelcomeContainer>
    <WelcomeTitle>
      Bonjour&nbsp;
      <span className="welcome__name">{name}</span>
    </WelcomeTitle>
    <WelcomePara>
      Félicitation ! Vous avez explosé vos objectifs hier
      👏
    </WelcomePara>
  </WelcomeContainer>
);

export default Welcome;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};
