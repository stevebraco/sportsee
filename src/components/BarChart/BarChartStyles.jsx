import styled from 'styled-components';

export const ContainerStyles = styled.div`
  max-width: 710px;
  width: 100%;
  height: 320px;
  background: #fbfbfb;

  margin-bottom: 5px;

  .recharts-tooltip-cursor {
    transform: translate(15px, 0px);
  }
`;

export const BadgeValueStyles = styled.div`
  display: inline-block;
  color: #74798c;
  font-size: 14px;
  font-weight: 500;
`;

export const BadgeStyles = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* background-color: #e60000; */
  margin-right: 10px;
  margin-left: 32px;
  background-color: ${(props) =>
    props.value === 'Poids (kg)' ? '#000000' : '#E60000'};
`;

export const CustomizedLegendStyles = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 15px;
    font-weight: 500;
  }
`;
