import Header from "../Header/Header";
import SideBar from "../SideNavBar/SideBar";
import { ContainerFlex, Main } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ContainerFlex>
        <SideBar />
        <Main>{children}</Main>
      </ContainerFlex>
    </div>
  );
};

export default Layout;
