import React from "react";
import { WelcomeContainer, WelcomePara, WelcomeTitle } from "./WelcomeStyles";

const Welcome = ({ name }) => {
  if (name === undefined) return "...loading";
  return (
    <WelcomeContainer>
      <WelcomeTitle>
        Bonjour <span className="welcome__name">{name}</span>
      </WelcomeTitle>
      <WelcomePara>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </WelcomePara>
    </WelcomeContainer>
  );
};

export default Welcome;
