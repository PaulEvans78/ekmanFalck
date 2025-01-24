import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  grid-area: top;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding-bottom: 1em; */
  padding-left: 2em;
  background-color: whitesmoke;
  /* background-color: #40cf00; */

  position: fixed;
  top: ${({ visible }) =>
    visible ? "0" : "-120px"}; /* Adjust according to your navbar height */
  transition: top 0.6s;

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 16px;
    padding-left: 1em;
  }

  @media screen and (max-width: 767px) {
    padding-left: 2em;
  }
`;

const StyledImageandName = styled.div`
  width: 180px;
  height: 100%;
  padding-left: 1.5em;

  @media screen and (max-width: 960px) {
    padding-left: 0em;
  }

  @media screen and (max-width: 420px) {
    width: 80%;
  }
`;

const StyledImgContainer = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 4em;
  }
`;



const StyledIdent = styled.div`
  float: left;
  width: 100px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 960px) {
    padding-left: 3em;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`;

const StyledName = styled.p`
  font-size: 32px;
  line-height: 34px;
  letter-spacing: 0em;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0;
  margin-top: 0.25em;
  &:hover {
    color: #59cf23;
  }

  @media screen and (max-width: 575px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (max-width: 420px) {
    font-size: 28px;
    line-height: 28px;
  }
`;

const StyledNavbarContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5em;
  margin-right: 2em;
  padding-right: 4em;

  @media screen and (max-width: 960px) {
    padding-top: 1em;
  }

  @media screen and (max-width: 767px) {
    margin-right: 1em;
  }

  @media screen and (max-width: 575px) {
    padding-top: 0.5em;
  }

  @media screen and (max-width: 420px) {
    margin-right: 0em;
  }
`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-bottom: -0.75em;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    line-height: 14px;

    &:hover {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 575px) {
    font-size: 12px;
    line-height: 14px;
  }

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

const StyledTelLink = styled.p`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-self: center;
  font-size: 14px;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    &:hover {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 575px) {
    font-size: 12px;
    line-height: 14px;
  }

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

const Styledp = styled.p`
  align-self: flex-end;
  margin-bottom: -0.6em;
  color: black;
  font-weight: 800;
  font-size: 16px;

  @media screen and (max-width: 960px) {
    margin-top: 0%;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }

  @media screen and (max-width: 575px) {
    font-size: 14px;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [activePage, setActivePage] = useState(location.pathname);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

   useEffect(() => {
          setActivePage(location.pathname);
  
          const handleScroll = () => {
              const currentScrollPos = window.pageYOffset;
              setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
              setPrevScrollPos(currentScrollPos);
          };
  
          window.addEventListener("scroll", handleScroll);
          
          return () => window.removeEventListener("scroll", handleScroll);
      }, [location.pathname, prevScrollPos]);

  return (
    <StyledNav visible={visible}>
      <StyledImageandName>
        <Link to="/">
          <StyledIdent>
            <StyledName>Ekman &Falck</StyledName>
          </StyledIdent>
        </Link>
      </StyledImageandName>

      <StyledNavbarContact>
        <Styledp>Sweden | South Africa</Styledp>
        <StyledMailLink>
          <a href="mailto:hello@ekmanfalck.se">mail@hello@ekmanfalck.se</a>
        </StyledMailLink>
        <StyledTelLink>
          <a href="tel:+46732551434">Tel: + 46 73 255 14 34</a>
        </StyledTelLink>
      </StyledNavbarContact>
    </StyledNav>
  );
};

export default Navbar;
