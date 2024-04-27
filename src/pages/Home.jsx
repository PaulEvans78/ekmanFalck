import React from 'react';
import styled from "styled-components";
import Contents from '../components/CardLandingPage/contents';


const StyledHomeContainer = styled.div`
grid-area: main;
width: 100%;
max-width: 100%;
display: flex;
flex-direction: row;
justify-items: center;
justify-content: center;
gap: 0.5em;
flex-wrap: wrap;
padding-top: 2em;
padding-bottom: 4em;
margin-top: 3em;

@media screen and (max-width: 960px) {
    margin-top: 6em;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 0em;
    padding-top: 0em;
    padding-bottom: 3em;
  }
`;

const StyledIntroduction = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-top: 3em;
    width: 90%;
    
`;

const StyledText = styled.p`
    text-align: center;
    /* padding-bottom: 1em; */
    font-size: 28px;
    font-weight: 600;
`;


const Home = () => {


  return (
    
     <StyledHomeContainer>

        <Contents/>

        <StyledIntroduction>
          <StyledText>
          Hello there! We are Ekman & Falck, a film production company producing ideas, concepts, commercials, visual solutions and production services in Scandinavia and South Africa.
          </StyledText>

          <StyledText>
          We are a network of creatives and producers — ranging from scriptwriters and directors to AI artists and music composers — with an aim at creating high end content for a commercial audience.
          </StyledText>

          <StyledText>
          Keep coming back to see the latest updates!
          </StyledText>

          <StyledText>
          Imagine Everything.
          </StyledText>
        </StyledIntroduction>

        

    </StyledHomeContainer>
  
  );
}


export default Home;
