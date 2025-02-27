import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Case1 from "../components/Case1";
import Case1carousel from "../components/Case1carousel";
import Case2 from "../components/Case2";
import Case3 from "../components/Case3";

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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 390px) {
    height: 400px;
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

const StyledH2 = styled.h2`
  width: 50%;
`;

const StyledTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 80%;
    justify-content: flex-start;
    padding-left: 52px;
  }

  @media screen and (max-width: 390px) {
    padding-left: 20px;
  }
`;

const StyledText = styled.p`
  text-align: right;
  padding-right: 24px;

  @media screen and (max-width: 1024px) {
    text-align: left;
    padding-right: 0px;
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

const StyledTextContainerAlignRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 1024px) {
    width: 80%;
    justify-content: flex-start;
    padding-left: 52px;
  }

  @media screen and (max-width: 390px) {
    padding-left: 20px;
  }
`;

const StyledTextAlignRight = styled.p`
  text-align: left;
  padding-right: 24px;
  padding-left: 24px;

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

const StyledH2ContainerAlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  width: 50%;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    width: 100%;
    padding-left: 52px;
  }

  @media screen and (max-width: 390px) {
    padding-left: 20px;
  }
`;

const StyledH2AlignRight = styled.h2`
  text-align: right;

  @media screen and (max-width: 1024px) {
    text-align: left;
  }
`;

const Home = () => {
  return (
    <StyledHomeContainer>
      <Hero />

      <StyledCopy>
        <StyledH2Container>
          <StyledH2>Craft beyond limits.</StyledH2>
        </StyledH2Container>

        <StyledTextContainer>
          <StyledText>
            Where traditional storytelling meets next-generation tools.
          </StyledText>
        </StyledTextContainer>
      </StyledCopy>

      <Case1 />
      <Case1carousel />

      <StyledCopyReversed>
        <StyledTextContainerAlignRight>
          <StyledTextAlignRight>
            Custom AI solutions that transform your creative workflow.
          </StyledTextAlignRight>
        </StyledTextContainerAlignRight>

        <StyledH2ContainerAlignRight>
          <StyledH2AlignRight>
            Intelligence <br /> by <br /> design.
          </StyledH2AlignRight>
        </StyledH2ContainerAlignRight>
      </StyledCopyReversed>

      <Case2 />

      <StyledCopy>
        <StyledH2Container>
          <StyledH2>Vision into reality.</StyledH2>
        </StyledH2Container>

        <StyledTextContainer>
          <StyledText>
            Full-scale production powered by human expertise and AI precision.
          </StyledText>
        </StyledTextContainer>
      </StyledCopy>

      <Case3 />
    </StyledHomeContainer>
  );
};

export default Home;
