import styled from "styled-components";
import Casefilm from "../assets/Grandiosa.mp4";
import CaseImage from "../assets/placeholder.png";

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
  width: 100%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 50% 50%;

    & > :nth-child(1) {
      display: none;
    }

    & > :nth-child(2),
    & > :nth-child(3) {
      display: flex;
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;

    & > :nth-child(1) {
      display: none;
    }

    & > :nth-child(2) {
      display: flex;
    }

    & > :nth-child(3) {
      display: none;
    }
  }
`;

const StyledContentContainer = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
`;

const StyledCaseVideo = styled.video`
  position: relative;
  width: 250%;
  aspect-ratio: 16/9;
  z-index: 1;
`;

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  z-index: 1;
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
          <StyledImg src={CaseImage} alt="A commercial for Grandiosa" />

          <StyledInfoContainer>
            <StyledH5>Where intelligence, meets innovation. </StyledH5>
          </StyledInfoContainer>
        </StyledContentContainer>

        <StyledContentContainer>
          <StyledCaseVideo
            src={Casefilm}
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
            <StyledH5>Beyond conventional thinking </StyledH5>
          </StyledInfoContainer>
        </StyledContentContainer>
      </StyledGridContainer>
    </StyledCaseContainer>
  );
};

export default Case3;
