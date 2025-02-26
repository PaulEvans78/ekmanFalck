import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logoTextV2.avif";

const StyledNav = styled.nav`
  grid-area: main;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5em;
  padding-left: 24px;
  padding-top: 20px;
  position: absolute;

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 16px;
    padding-left: 1em;
  }

  @media screen and (max-width: 767px) {
    padding-left: 2em;
  }

  @media screen and (max-width: 390px) {
    padding-left: 20px;
  }
`;

const StyledEFLogo = styled.img`
  width: 51px;
  height: 63px;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Link to="/">
        <StyledEFLogo src={logo} alt="The letters E & F for Ekman and Falck." />
      </Link>
    </StyledNav>
  );
};

export default Navbar;
