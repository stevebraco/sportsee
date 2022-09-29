import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderStyles, Navigation } from './HeaderStyles';

/**
 * Component that represents at the top of the page
 * @return <Header />
 */
export default function Header() {
  return (
    <HeaderStyles>
      <img src="./images/logo.png" alt="logo" />
      <Navigation>
        <NavLink to="#">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </Navigation>
    </HeaderStyles>
  );
}
