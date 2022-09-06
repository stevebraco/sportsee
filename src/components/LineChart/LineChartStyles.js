import styled from "styled-components";

export const LineChartStyles = styled.div`
  position: relative;
  width: 225px;
  height: 263;
  background: #ff0000;
  border-radius: 5px;
  overflow: hidden;

  .recharts-tooltip-cursor {
    stroke: rgba(0, 0, 0, 0.1);
    stroke-width: 300px;
    transform: translate(150px, 0px);
  }
`;

export const LineTitleStyles = styled.div`
  position: absolute;
  top: 29px;
  left: 34px;
  z-index: 1;
  max-width: 147px;

  h2 {
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }
`;
