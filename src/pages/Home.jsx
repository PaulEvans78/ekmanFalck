import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Case1 from "../components/Case1";
// import Case1carousel from "../components/Case1carousel";
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
    height: auto;
  }
`;

const StyledCopySpecial = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
`;

const StyledH2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 1460px) {
    justify-content: flex-start;
    padding-left: 52px;
  }

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    width: 100%;
    padding-left: 52px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 24px;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 390px) {
    padding-left: 20px;
  }
`;

const StyledH2 = styled.h2`
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding-left: 4em;

  @media screen and (max-width: 1460px) {
    width: 50%;
    justify-content: flex-start;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    justify-content: flex-start;
    padding-left: 52px;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 24px;
  }

  @media screen and (max-width: 390px) {
    padding-left: 20px;
  }
`;

const StyledText = styled.p`
  text-align: left;
  padding-right: 2em;
  color: #2d2d2d;

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
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledTextContainerAlignRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  color: #2d2d2d;
  padding-left: 4em;
`;

const StyledTextAlignRight = styled.p`
  text-align: left;
  padding-right: 24px;
  padding-left: 24px;
`;

const StyledH2ContainerAlignRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  width: 50%;
`;

const StyledH2AlignRight = styled.h2`
  text-align: right;
`;

const Home = () => {
  return (
    <StyledHomeContainer>
      <Hero />

      <StyledCopy>
        <StyledH2Container>
          <StyledH2>Imagine Everything.</StyledH2>
        </StyledH2Container>

        <StyledTextContainer>
          <StyledText>
            Ekman & Falck is a production house for concepts, ideas,
            commercials, visual solutions and storytelling. We are a network of
            creatives and producers with a vision to create high-quality content
            in all formats and techniques for a commercial audience.
          </StyledText>
        </StyledTextContainer>
      </StyledCopy>

      <Case1 />
      {/* <Case1carousel /> */}

      <StyledCopyReversed>
        <StyledTextContainerAlignRight>
          <StyledTextAlignRight>
            The idea of creating into making is our driving force. We started
            out as friends, won some awards and went on to create something new.
            Story first.
          </StyledTextAlignRight>
        </StyledTextContainerAlignRight>

        <StyledH2ContainerAlignRight>
          <StyledH2AlignRight>
            The story is <br /> the story.
          </StyledH2AlignRight>
        </StyledH2ContainerAlignRight>
      </StyledCopyReversed>

      <StyledCopySpecial>
        <StyledH2Container>
          <StyledH2>The story is the story.</StyledH2>
        </StyledH2Container>

        <StyledTextContainer>
          <StyledText>
          The idea of creating into making is our driving force. We started
            out as friends, won some awards and went on to create something new.
            Story first.
          </StyledText>
        </StyledTextContainer>
      </StyledCopySpecial>

      <Case2 />

      <StyledCopy>
        <StyledH2Container>
          <StyledH2>Ideas and emotions.</StyledH2>
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
