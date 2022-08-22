import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarStyles>
      <img src="./images/yoga.png" alt="yoga" />
      <img src="./images/natation.png" alt="natation" />
      <img src="./images/velo.png" alt="velo" />
      <img src="./images/fit.png" alt="fit" />
    </SideBarStyles>
  );
};

export default SideBar;

const SideBarStyles = styled.div`
  background: #020203;
  max-width: 117px;
  min-width: 117px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
