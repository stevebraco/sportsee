import styled from "styled-components"
import Header from "./Header"
import SideBar from "./SideBar"

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <ContainerFlex>
      <SideBar />
      <Main>
      {children}
      </Main>
      </ContainerFlex>
    </div>
  )
}

export default Layout

const ContainerFlex = styled.div`
  display: flex;
  height: calc( 100vh - 91px);;
`;

const Main = styled.div`
  padding-left: 109px;
`;