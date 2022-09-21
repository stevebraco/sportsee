import React from 'react';
import SideBarStyles from './SideBarStyles';

/**
 * Component that represents side of the page
 * return <SideBar />
 */
const SideBar = () => (
  <SideBarStyles>
    <img src="./images/yoga.png" alt="yoga" />
    <img src="./images/natation.png" alt="natation" />
    <img src="./images/velo.png" alt="velo" />
    <img src="./images/fit.png" alt="fit" />
  </SideBarStyles>
);

export default SideBar;
