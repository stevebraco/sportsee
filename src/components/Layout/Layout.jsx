import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import SideBar from '../SideNavBar/SideBar';
import { ContainerFlex, Main } from './LayoutStyles';

/**
 * @param  {} {children}
 * return components
 */
const Layout = ({ children }) => (
  <div>
    <Header />
    <ContainerFlex>
      <SideBar />
      <Main>{children}</Main>
    </ContainerFlex>
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
