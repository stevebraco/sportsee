import React from "react";
import { HeaderStyles, Navigation } from "./HeaderStyles";

export default function Header() {
  return (
    <HeaderStyles>
      <img src="./images/logo.png" alt="logo" />
      <Navigation>
        <a href="#">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglage</a>
        <a href="#">Communauté</a>
      </Navigation>
    </HeaderStyles>
  );
}
