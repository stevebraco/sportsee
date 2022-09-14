import styled from 'styled-components';

export const ContainerNutriment = styled.div`
  display: flex;
  gap: 7%;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  border-radius: 5px;
  max-width: 220px;
  width: 100%;
  height: 124px;
  padding: 0 35px 0 35px;
`;

export const NutrimentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const NutrimentNumber = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

export const NutrimentName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #74798c;
`;
