import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import SideBar from '../SideNavBar/SideBar';
import { ContainerFlex, Main } from './LayoutStyles';
import GlobalStyles from '../../styles/GlobalStyles';

/**
 * Component showing the page
 * @param  {} {children}
 * @return <Layout></Layout>
 */
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <ContainerFlex>
      <SideBar />
      <Main>{children}</Main>
    </ContainerFlex>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
