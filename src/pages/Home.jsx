import React from 'react';
import styled from "styled-components";
import Skills from '../components/CardLandingPage/skills';
// import { Fade } from "react-awesome-reveal";

const StyledHomeContainer = styled.div`
max-width: 100vw;
display: flex;
grid-area: main;
flex-direction: row;
justify-items: center;
justify-content: center;
gap: 1em;
flex-wrap: wrap;
padding-top: 6em;
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


const Home = () => {

  return (
    
     <StyledHomeContainer>

        <Skills />

            {/* <Fade><ImgSlider /></Fade> */}

    </StyledHomeContainer>
  
  );
}


export default Home;
