import React from 'react';
import styled from "styled-components";
import Hero from '../components/Hero';
import Case1 from '../components/Case1';
import Case2 from '../components/Case2';
import Case3Contents from '../components/Case3/contents';

const StyledHomeContainer = styled.div`
grid-area: main;
width: 100%;
max-width: 100%;
overflow-x: hidden;
margin-top: -1em;

/* @media screen and (max-width: 960px) {
    margin-top: 0em;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 0em;
    padding-bottom: 3em;
    margin-top: 1em;
  }
  @media screen and (max-width: 575px) {
        margin-top: 3em;
}
  

  @media screen and (max-width: 420px) {
        margin-top: 3em;
} */
`;

const StyledCopy = styled.div`
    width: 100%;
    height: 435px;
    display: flex;
    flex-direction: row;
    align-content: space-between;

    /* display: grid;
    grid-template-columns: 1fr 1fr; */
  
   
    
    /* @media screen and (max-width: 960px) {
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
     
  } */
`;

const StyledH1Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
`;

const StyledH1ContainerReverse = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: end;
width: 50%;
/* padding-right: 100px; */
`;

const StyledTextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
`;

const StyledH1 = styled.h1`
width: 50%;
`;

const StyledH1Reverse = styled.h1` 
width: 50%;
`;

const StyledText = styled.p`
    text-align: center;
  
/* 
    @media screen and (max-width: 960px) {
      font-size: 48px;
  }

  @media screen and (max-width: 767px) {
      font-size: 40px;
  }

  @media screen and (max-width: 575px) {
      font-size: 38px;
  } */
`;


const Home = () => {


  return (
    
     <StyledHomeContainer>

        <Hero/>

        <StyledCopy>
          <StyledH1Container>
          <StyledH1>
          Craft beyond limits. 
          </StyledH1>
          </StyledH1Container>

          <StyledTextContainer>
          <StyledText>
          Where traditional storytelling meets next-generation tools.
          </StyledText>
          </StyledTextContainer>
        </StyledCopy>

        <Case1/>

        <StyledCopy>
        <StyledTextContainer>
          <StyledText>
          Custom AI solutions that transform your creative workflow.
          </StyledText>
          </StyledTextContainer>

          <StyledH1ContainerReverse>
          <StyledH1Reverse>
          Itelligence by design.          
          </StyledH1Reverse>
          </StyledH1ContainerReverse>

          
        </StyledCopy>
       

        <Case2/>

        <StyledCopy>
          <StyledH1Container>
          <StyledH1>
          Vision into reality.           
          </StyledH1>
          </StyledH1Container>

          <StyledTextContainer>
          <StyledText>
          Full-scale production powered by human expertise and AI precision.
          </StyledText>
          </StyledTextContainer>
        </StyledCopy>

        <Case3Contents/>

        

    </StyledHomeContainer>
  
  );
}


export default Home;
