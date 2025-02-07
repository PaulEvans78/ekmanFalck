import React from 'react';
import styled from "styled-components";
import HeroContents from '../components/Hero/contents';
import Case1Contents from '../components/Case1/contents';
import Case2Contents from '../components/Case2/contents';
import Case3Contents from '../components/Case3/contents';
import grandiosa_logo from '../assets/grandiosa.png';
import lime_logo from '../assets/lime.png';
import bly_logo from '../assets/bly.png';
import sns_logo from '../assets/sns.png';

const StyledHomeContainer = styled.div`
grid-area: main;
width: 100%;
max-width: 100%;
overflow-x: hidden;
display: flex;
flex-direction: row;
justify-items: center;
justify-content: center;
/* gap: 0.5em; */
flex-wrap: wrap;
/* padding-top: 2em; */
/* padding-bottom: 4em; */
margin-top: -1em;

@media screen and (max-width: 960px) {
    /* align-items: center; */
    margin-top: 0em;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 0em;
    /* padding-top: 0em; */
    padding-bottom: 3em;
    margin-top: 1em;
  }
  @media screen and (max-width: 575px) {
        /* margin-bottom: 0.5em; */
        margin-top: 3em;
}
  

  @media screen and (max-width: 420px) {
        /* margin-bottom: 0.5em; */
        margin-top: 3em;
}
`;

const StyledIntroduction = styled.div`
    width: 80%;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-content: center;
    justify-content: center;
    padding-top: 3em;
    padding-bottom: 3em;
   
    
    @media screen and (max-width: 960px) {
      width: 90%;
      padding-left: 1em;
      padding-right: 1em;
      padding-top: 1em;
      padding-bottom: 1em;
  }

  @media screen and (max-width: 767px) {
      width: 80%;
      
  }

  @media screen and (max-width: 575px) {
      width: 90%;  
      padding-top: 0em;
      padding-bottom: 0em;
  }

  @media screen and (max-width: 420px) {
      height: 670px;
      /* padding-top: 3em;
    padding-bottom: 3em; */
  }
`;

const StyledLogoContainer = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-content: center;
    justify-content: center;
    padding: 3em 3em 3em 3em;
    background-color: #40cf00;
   
    
    @media screen and (max-width: 960px) {
      width: 90%;
      padding-left: 1em;
      padding-right: 1em;
  }
`;

const StyledLogosGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`;


const StyledLogos = styled.img`
display: flex;
justify-self: center;
width: 100px;
`;


const StyledText = styled.p`
    text-align: center;
    color: black;
    font-size: 54px;
    font-weight: 700;
    font-style: normal;

    @media screen and (max-width: 960px) {
      font-size: 48px;
  }

  @media screen and (max-width: 767px) {
      font-size: 40px;
  }

  @media screen and (max-width: 575px) {
      font-size: 38px;
  }
`;


const Home = () => {


  return (
    
     <StyledHomeContainer>

        <HeroContents/>

        <StyledIntroduction>
          <StyledText>
          Grounded in the traditions of filmmaking and storytelling, we merge artistry with technology to craft impactful experiences
          </StyledText>
        </StyledIntroduction>

        <Case1Contents/>

        <StyledIntroduction>
          <StyledText>
          A full service production company based in Sweden and South Africa 
          </StyledText>
        </StyledIntroduction>

        <Case2Contents/>

        <StyledIntroduction>
          <StyledText>
          We are a collective of talented individuals, 
          each bringing unique expertise and experience gained from working with renowned brands such as 
          </StyledText>
        </StyledIntroduction>

        <StyledLogoContainer>

        <StyledLogosGrid>
            <StyledLogos src={grandiosa_logo} alt="Grandiosa pizza logo" />
            <StyledLogos src={lime_logo} alt="Lime travel logo" />
            <StyledLogos src={bly_logo} alt="Bly agency logo" />
            <StyledLogos src={sns_logo} alt="SNS logo" />
        </StyledLogosGrid>

        <StyledLogosGrid>
        <StyledLogos src={grandiosa_logo} alt="Grandiosa pizza logo" />
            <StyledLogos src={lime_logo} alt="Lime travel logo" />
            <StyledLogos src={bly_logo} alt="Bly agency logo" />
            <StyledLogos src={sns_logo} alt="SNS logo" />
        </StyledLogosGrid>
        <StyledLogosGrid>
        <StyledLogos src={grandiosa_logo} alt="Grandiosa pizza logo" />
            <StyledLogos src={lime_logo} alt="Lime travel logo" />
            <StyledLogos src={bly_logo} alt="Bly agency logo" />
            <StyledLogos src={sns_logo} alt="SNS logo" />
        </StyledLogosGrid>


        </StyledLogoContainer>

        <StyledIntroduction>
          <StyledText>
          Understanding the clients needs and finding the best processes. Something about AI?
          </StyledText>
        </StyledIntroduction>

        <Case3Contents/>

        

        

    </StyledHomeContainer>
  
  );
}


export default Home;
