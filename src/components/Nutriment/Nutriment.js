import React from "react";
import {
  ContainerNutriment,
  NutrimentContent,
  NutrimentName,
  NutrimentNumber,
} from "./NutrimentStyles";

const Nutriment = ({ number, unity, img, name }) => {
  return (
    <ContainerNutriment>
      <img src={img} alt={name} />
      <NutrimentContent>
        <NutrimentNumber>
          {number}
          {unity}
        </NutrimentNumber>
        <NutrimentName>{name}</NutrimentName>
      </NutrimentContent>
    </ContainerNutriment>
  );
};

export default Nutriment;
