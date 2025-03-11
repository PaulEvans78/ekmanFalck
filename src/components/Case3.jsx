import styled from "styled-components";
import FilmLeft from "../assets/grandiosa_kebabrulle.mp4";
import FilmRight from "../assets/limetravel9.16.mp4";
import CaseImage from "../assets/dedicated_AI.png";

const StyledCaseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0%;
  overflow: hidden;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 34% 34% 34%;
  gap: 4px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 50% 50%;


    & > :nth-child(1) {
      display: flex;
    }

    & > :nth-child(2) {
      display: flex;
    }

    & > :nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
    gap: 0px;

    & > :nth-child(1) {
      display: flex;
    }

    & > :nth-child(2) {
      display: none;
    }

    & > :nth-child(3) {
      display: none;
    }
  }
`;

const StyledContentContainer = styled.div`
  position: relative;
  aspect-ratio: 9/16;
  overflow: hidden;
`;

const StyledCaseVideo = styled.video`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  z-index: 1;
`;

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  z-index: 1;
  object-fit: cover;
  /* padding-left: 4px;
  padding-right: 4px; */

  @media screen and (max-width: 1024px) {
    padding-left: 0px;
  padding-right: 0px;
  }
`;

const StyledInfoContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--main-font-color);
  background-color: #02020230;
  z-index: 10;
`;

const StyledH5 = styled.h5`
  text-align: center;
`;

const Case3 = () => {
  return (
    <StyledCaseContainer>
      <StyledGridContainer>
        <StyledContentContainer>
        <StyledCaseVideo
            src={FilmLeft}
            autoPlay
            loop
            muted
            playsInline
            alt="A commercial for Grandiosa"
          />

          <StyledInfoContainer>
            <StyledH5>AI solutions, human insights </StyledH5>
          </StyledInfoContainer>
         
        </StyledContentContainer>

        <StyledContentContainer>
        <StyledImg src={CaseImage} alt="A commercial for Grandiosa" />

<StyledInfoContainer>
  <StyledH5>Where intelligence, meets innovation. </StyledH5>
</StyledInfoContainer>
        
        </StyledContentContainer>

        <StyledContentContainer>

        <StyledCaseVideo
            src={FilmRight}
            autoPlay
            loop
            muted
            playsInline
            alt="A commercial for Grandiosa"
          />

          <StyledInfoContainer>
            <StyledH5>Beyond 
            conventional thinking</StyledH5>
          </StyledInfoContainer>
        </StyledContentContainer>

      </StyledGridContainer>
    </StyledCaseContainer>
  );
};

export default Case3;
