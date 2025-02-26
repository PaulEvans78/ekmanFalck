import React from 'react';
import styled from "styled-components";
import Hero from '../components/Hero';
import Case1 from '../components/Case1';
import Case2 from '../components/Case2';
import Case3 from '../components/Case3';

const StyledHomeContainer = styled.div`
grid-area: main;
width: 100%;
max-width: 100%;
overflow-x: hidden;
margin-top: -1em;
`;

const StyledCopy = styled.div`
    width: 100%;
    height: 435px;
    display: flex;
    flex-direction: row;
    align-content: space-between;

    @media screen and (max-width: 960px) {
      flex-direction: column;
  }

  @media screen and (max-width: 390px) {
    height: 400px;
}
`;

const StyledCopyReversed = styled.div`
    width: 100%;
    height: 435px;
    display: flex;
    flex-direction: row;
    align-content: space-between;

    @media screen and (max-width: 960px) {
      flex-direction: column-reverse;
  }
  `;

const StyledH2Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;

@media screen and (max-width: 1024px) {
  justify-content: flex-start;
  padding-left: 52px;
}

@media screen and (max-width: 390px) {
  padding-left: 20px;
}
`;

const StyledH2ContainerReverse = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
text-align: right;
width: 50%;
padding-right: 100px;

@media screen and (max-width: 960px) {
  display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
padding-left: 52px;
  }

  @media screen and (max-width: 390px) {
  padding-left: 20px;
}
`;

const StyledTextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;

@media screen and (max-width: 960px) {
  width: 80%;
  padding-left: 52px;
  }

  @media screen and (max-width: 390px) {
  padding-left: 20px;
}
`;

// const StyledTextContainerReversed = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// width: 50%;

// @media screen and (max-width: 960px) {
//   flex-direction: row-reverse;
//   width: 80%;
//   padding-left: 52px;
//   }
// `;

const StyledH2 = styled.h2`
width: 50%;
`;

const StyledH2Reverse = styled.h2` 
width: 100%;
text-align: right;
white-space: normal; 
  word-break: break-word; 
  
  @media screen and (max-width: 960px) {
    /* width: 50%; */
    text-align: left;
  }
`;

const StyledText = styled.p`
    text-align: right;
    padding-right: 24px;

    @media screen and (max-width: 960px) {
      padding-right: 0px;
      text-align: left;
  }
  
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

const StyledTextReversed = styled.p`
    text-align: right;
    padding-right: 24px;

    @media screen and (max-width: 1024px) {
      text-align: left;
      padding-left: 52px;
}

@media screen and (max-width: 960px) {
      padding-right: 0px;
      padding-left: 0px;
      text-align: left;
      margin-bottom: 3em;
  }
`;


const Home = () => {


  return (
    
     <StyledHomeContainer>

        <Hero/>

        <StyledCopy>
          <StyledH2Container>
          <StyledH2>
          Craft beyond limits. 
          </StyledH2>
          </StyledH2Container>

          <StyledTextContainer>
          <StyledText>
          Where traditional storytelling meets next-generation tools.
          </StyledText>
          </StyledTextContainer>
        </StyledCopy>

        <Case1/>

        <StyledCopyReversed>
        <StyledTextContainer>
          <StyledTextReversed>
          Custom AI solutions that transform your creative workflow.
          </StyledTextReversed>
          </StyledTextContainer>

          <StyledH2ContainerReverse>
          <StyledH2Reverse>
          Itelligence <br />
          by <br />
          design.          
          </StyledH2Reverse>
          </StyledH2ContainerReverse>

          
        </StyledCopyReversed>
       

        <Case2/>

        <StyledCopy>
          <StyledH2Container>
          <StyledH2>
          Vision into reality.           
          </StyledH2>
          </StyledH2Container>

          <StyledTextContainer>
          <StyledText>
          Full-scale production powered by human expertise and AI precision.
          </StyledText>
          </StyledTextContainer>
        </StyledCopy>

        <Case3/>

        

    </StyledHomeContainer>
  
  );
}


export default Home;
