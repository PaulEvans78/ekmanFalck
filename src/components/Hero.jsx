import styled from "styled-components";
import Herofilm from "../assets/showreel.mp4";
import ArrowIcon from "../assets/arrow.png";

const StyledHeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0%;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    aspect-ratio: 3 / 4;
  }

  @media screen and (max-width: 767px) {
    aspect-ratio: 9 / 16;
  }
`;

const StyledHeroVideo = styled.video`
  width: 100%;

  @media screen and (max-width: 1280px) {
    width: 250%;
  }

  @media screen and (max-width: 767px) {
    width: 320%;
  }
`;

const StyledGridContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: 40% 55%;
  width: 100%;
  height: 100%;
  padding-left: 24px;
  background-color: #02020230;

  @media screen and (max-width: 390px) {
    grid-template-rows: 30% 70%;
    padding-left: 20px;
  }
`;

const StyledH1Container = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding-top: 20em;

  @media screen and (max-width: 390px) {
    justify-content: flex-end;
  }
`;

const StyledH1 = styled.h1`
  color: var(--main-font-color);
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  justify-self: flex-end;
  max-width: 100%;
  height: 100%;
  color: var(--main-font-color);
  padding: 24px 24px 24px 20em;

  @media screen and (max-width: 1500px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 1280px) {
    justify-content: flex-start;
    align-items: flex-start;
    justify-self: flex-start;
    margin-top: 6em;
    padding: 24px;
  }

  @media screen and (max-width: 960px) {
    padding: 24px 0px;
  }
`;

const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-bottom: 4em;


  @media screen and (max-width: 1280px) {
    width: 70%;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

// const StyledSubHeading = styled.p`
//   font-family: "helvetica Neue", sans-serif;
//   font-size: 50px;
//   line-height: 57px;
//   letter-spacing: -2%;
//   font-weight: bold;
//   margin: 0;
//   align-self: flex-start;

//   @media screen and (max-width: 1500px) {
//     font-size: 32px;
//   }

//   @media screen and (max-width: 1280px) {
//     font-size: 50px;
//   }

//   @media screen and (max-width: 767px) {
//     font-size: 28px;
//   }

//   @media screen and (max-width: 390px) {
//     font-size: 20px;
//   }
// `;

const StyledHeroDigest = styled.p`
  width: 90%;
  font-family: "helvetica Neue", sans-serif;
  font-size: 25px;
  line-height: 25px;
  letter-spacing: -4%;
  font-weight: light;

  @media screen and (max-width: 1500px) {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -4%;
  }

  @media screen and (max-width: 1280px) {
    font-size: 25px;
    line-height: 25px;
    letter-spacing: -4%;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -4%;
  }

  @media screen and (max-width: 390px) {
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -4%;
  }
`;

const StyledMailLink = styled.p`
  font-family: "helvetica Neue", sans-serif;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledButton = styled.button`
  height: 48px;
  padding-left: 2em;
  padding-right: 2em;
  background-color: #272626;
  color: var(--main-font-color);
  border-radius: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover ${StyledMailLink} {
    color: #59cf23;
  }

  @media screen and (max-width: 390px) {
    height: 40px;
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  padding-top: 0.15em;
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
        <StyledH1Container>
          <StyledH1>Ekman &Falck</StyledH1>
        </StyledH1Container>

        <StyledInfoContainer>
          <StyledContainer>
            {/* <StyledSubHeading>Engineering possibilities </StyledSubHeading> */}
            <StyledHeroDigest>
            Grounded in the traditions of filmmaking, we merge artistry with technology to craft meaningful experiences 
            where traditional storytelling meets next-generation tools.
            </StyledHeroDigest>

            <a href="mailto:hello@ekmanfalck.se">
              <StyledButton>
                <StyledMailLink>
                  Say hello
                  <StyledIcon>
                    <StyledImg src={ArrowIcon} alt="A arrow icon for next" />
                  </StyledIcon>
                </StyledMailLink>
              </StyledButton>
            </a>
          </StyledContainer>
        </StyledInfoContainer>
      </StyledGridContainer>
    </StyledHeroContainer>
  );
};

export default Hero;
