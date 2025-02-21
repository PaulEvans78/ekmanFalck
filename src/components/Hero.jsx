import styled from "styled-components";
import Herofilm from "../assets/Grandiosa.mp4";
import HeroHeader from "../assets/logoTextFull.avif";

const StyledHeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0%;
  overflow: hidden;

  /* @media screen and (max-width: 960px) {
    
 
}

@media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 1em; 
    margin-bottom: 0em;
    aspect-ratio: 3 / 4;
} */
`;

const StyledHeroVideo = styled.video`
  width: 100%;
`;

const StyledGridContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: 40% 55%;
  width: 100%;
  height: 100%;
  padding-left: 24px;
  background-color: #02020230;
`;

const StyledHeroImageContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding-top: 18em;
`;

// const StyledHeroHeader = styled.h1`
//     /* z-index: 100; */
//     width: 500px;
//     color: var(--main-font-color);
// `;

const StyledImg = styled.img`
  width: 76%;
  padding: 0;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 100%;
  height: 100%;
  color: var(--main-font-color);
  padding: 24px;
`;

const StyledContainer = styled.div`
  width: 50%;  
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-left: 6em;
  
`;

const StyledH2 = styled.h2`
align-self: flex-start;
`;

const StyledH3 = styled.p`
align-self: flex-start;
  width: 78%;
`;

const StyledButton = styled.button`
  height: 48px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.5em;
  background-color: #272626;
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  border: none;
`;

const StyledMailLink = styled.p`
  color: var(--main-font-color);
`;

const Hero = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroVideo
        src={Herofilm}
        autoPlay
        loop
        muted
        playsInline
        alt="A commercial for Grandiosa"
      />
      <StyledGridContainer>
        <StyledHeroImageContainer>
          <StyledImg src={HeroHeader} />
        </StyledHeroImageContainer>

        <StyledInfoContainer>
            <StyledContainer>
          <StyledH2>Engineering possibilities </StyledH2>
          <StyledH3>
            Grounded in the traditions of filmmaking and story telling, we merge
            artistry with technology to craft meaningful experiences.
          </StyledH3>

          <StyledButton>
            <StyledMailLink>
              <a href="mailto:hello@ekmanfalck.se">Start Today</a>
            </StyledMailLink>
          </StyledButton>
          </StyledContainer>
        </StyledInfoContainer>
      </StyledGridContainer>
    </StyledHeroContainer>
  );
};

export default Hero;
