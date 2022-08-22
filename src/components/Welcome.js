import React from "react";

const Welcome = ({ name }) => {
  if (name === undefined) return "...loading";
  return (
    <div className="welcome">
      <h1 className="welcome__title">
        Bonjour <span className="welcome__name"></span> {name}
      </h1>
      <p className="welcome__para">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Welcome;
