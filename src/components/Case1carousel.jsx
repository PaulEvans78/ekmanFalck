import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Casefilm from "../assets/Grandiosa.mp4";
import CaseImage from "../assets/placeholder.png";

import Casefilm2 from "../assets/Beauty.mp4";
import CaseImage2 from "../assets/polarbrod.png";



const StyledCaseContainer = styled.div`
  width: 100%;
  min-width: 0%;
  overflow: hidden;
`;

const StyledContentContainer = styled.div`
  position: relative;
  aspect-ratio: 4/4;
  overflow: hidden;
`;

const StyledCaseVideo = styled.video`
  position: relative;
  width: 200%;
  aspect-ratio: 16/9;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  z-index: 1;
`;

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  aspect-ratio: 4/4;
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
  padding: 0em 12em 0em 12em;
  color: var(--main-font-color);
  background-color: #02020230;
  z-index: 10;

  @media screen and (max-width: 767px) {
    padding: 0em 4em 0em 4em;
  }

  @media screen and (max-width: 390px) {
    padding: 0em 1em 0em 1em;
  }
`;

const StyledH4 = styled.h4`
  text-align: center;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Case1carousel = () => {
  return (
    <StyledCaseContainer>
      <Carousel responsive={responsive} infinite autoPlay>
        <StyledContentContainer>
          <StyledImg src={CaseImage} alt="A commercial for Grandiosa" />
          <StyledInfoContainer>
            <StyledH4>Smart solutions, seamless integration.</StyledH4>
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
            <StyledH4>
              Full service production from Sweden to South Africa.
            </StyledH4>
          </StyledInfoContainer>
        </StyledContentContainer>

        <StyledContentContainer>
          <StyledImg src={CaseImage2} alt="A commercial for Grandiosa" />
          <StyledInfoContainer>
            <StyledH4>Smart solutions, seamless integration.</StyledH4>
          </StyledInfoContainer>
        </StyledContentContainer>

        <StyledContentContainer>
          <StyledCaseVideo
            src={Casefilm2}
            autoPlay
            loop
            muted
            playsInline
            alt="A commercial for Grandiosa"
          />
          <StyledInfoContainer>
            <StyledH4>
              Full service production from Sweden to South Africa.
            </StyledH4>
          </StyledInfoContainer>
        </StyledContentContainer>

      </Carousel>
    </StyledCaseContainer>
  );
};

export default Case1carousel;
