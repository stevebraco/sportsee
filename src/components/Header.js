import React from 'react'
import styled from 'styled-components'

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
  )
}

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  padding: 0 87px 0 29px;
  justify-content: space-between;
  background: #020203;
  height: 91px;

  img {
    width: 178px;
  }
`;
const Navigation = styled.nav`
  width: 75%;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;