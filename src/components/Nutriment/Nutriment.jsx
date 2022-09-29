import React from 'react';
import PropTypes from 'prop-types';
import {
  ContainerNutriment,
  NutrimentContent,
  NutrimentName,
  NutrimentNumber,
} from './NutrimentStyles';

/**
 *  * Component for showing key info of the user
 * @param  {number} {number}
 * @param  {string} {unity}
 * @param  {string} {img}
 * @param  {string} {name}
 * @return  <Nutriment img="data" number={data} unity="data" name="data"/>
 */
const Nutriment = ({ number, unity, img, name }) => (
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

export default Nutriment;

Nutriment.propTypes = {
  number: PropTypes.number.isRequired,
  unity: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
