import React from "react";
import styled from "styled-components";
import logo from "../assets/logoVectorDark.avif";

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-self: center;
  background-color: whitesmoke;
  width: 100%;
  max-width: 100%;
  z-index: 50;
  bottom: 0;
  font-size: 14px;
  line-height: 24px;
  color: whitesmoke;
  margin-bottom: 0;

  @media screen and (max-width: 960px) {
    padding-left: 0em;
    padding-right: 0em;
  }
`;

const StyledContentsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 45% 45%;
  grid-template-rows: 1fr;
  grid-template-areas: "logo copyright contact";
  align-self: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "logo contact"
      "copyright copyright";
  }
`;

const StyledImageandName = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: columns;
  width: 100%;
`;

const StyledImgContainer = styled.div`
  float: left;
  display: flex;
  padding-top: 2em;
  padding-bottom: 2em;
  width: 20%;
  padding-left: 24px;
  text-align: left;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    margin-right: 2em;
  }

  @media screen and (max-width: 960px) {
    margin-right: 3em;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0em;
  }
`;

const StyledImg = styled.img`
  text-align: center;
  width: 51px;
  height: 63px;
`;

const StyledContactContainer = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-content: center;
  margin-right: 24px;
  padding-right: 24px;
  padding-left: 24px;
  border-left: 1px solid black;
  border-right: 1px solid black;

  @media screen and (max-width: 767px) {
    align-self: flex-end;
    margin-top: 2em;
  }
`;

const StyledCopyRightContainer = styled.div`
  grid-area: copyright;
  width: 50%;
  align-content: flex-end;
  justify-items: flex-start;

  @media screen and (max-width: 960px) {
    width: 70%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 80px;
    justify-items: center;
    justify-content: center;
    align-items: center;
    text-align: center;

  }
`;

const StyledCopyRight = styled.p`
  font-family: "helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -4%;
  font-weight: light;
  color: #000000;
  margin-bottom: 2em;
`;

const StyledMailLink = styled.a`
  color: #000000;
  font-family: "helvetica Neue", sans-serif;
  font-size: 25px;
  line-height: 57px;
  letter-spacing: -4%;
  font-weight: light;
  text-decoration: none;

  &:hover {
    color: #59cf23;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContentsContainer>
        <StyledImageandName>
          <StyledImgContainer
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <StyledImg
              src={logo}
              alt="The letters E & F for Ekman and Falck."
            />
          </StyledImgContainer>
        </StyledImageandName>

        <StyledCopyRightContainer>
          <StyledCopyRight>© Ekman&Falck 2025</StyledCopyRight>
        </StyledCopyRightContainer>

        <StyledContactContainer>
          <StyledContact>
            <StyledMailLink>
              <a href="mailto:hello@ekmanfalck.se">Contact</a>
            </StyledMailLink>
          </StyledContact>
        </StyledContactContainer>
      </StyledContentsContainer>
    </StyledFooter>
  );
};

export default Footer;
