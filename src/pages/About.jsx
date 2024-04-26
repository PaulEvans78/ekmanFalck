import React from 'react';
import styled from "styled-components";
import Digest from '../components/AboutDigest/digest/Digest';
import AboutPicture from '../components/AboutPictureCard/aboutpicture/AboutPicture';
import Text from '../components/AboutText/text/Text';

const StyledAboutContainer = styled.div`
max-width: 100vw;
display: flex;
grid-area: main;
flex-direction: row;
justify-items: center;
justify-content: center;
gap: 0.5em;
flex-wrap: wrap;
padding-top: 1.25em;
padding-bottom: 4em;
  /* grid-area: main;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 12em;*/
  /* background-color: green;  */

  @media screen and (max-width: 767px) {
    gap: 0em;
    padding-top: 0em;
    padding-bottom: 3em;
  }
`;


const About = () => {

  return (
    
     <StyledAboutContainer >
        <Digest />
        <AboutPicture />
        <Text />

    </StyledAboutContainer >
  
  );
}


export default About;
