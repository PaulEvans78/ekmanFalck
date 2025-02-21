import styled from "styled-components";
import Herofilm from "../assets/Grandiosa.mp4";


const StyledCaseContainer = styled.div`
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

// const StyledFlexContainer = styled.div`
//   position: absolute;
//   display: grid;
//   grid-template-rows: 40% 55%;
//   width: 100%;
//   height: 100%;
//   padding-left: 24px;
//   background-color: #02020230;
// `;


const StyledInfoContainer = styled.div`
position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  color: var(--main-font-color);
  background-color: #02020230;
  padding-bottom: 16em;
`;

const StyledContainer = styled.div`

  width: 50%;  
  display: flex;
  align-items: flex-start;
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




const Hero = () => {
  return (
    <StyledCaseContainer>
      <StyledHeroVideo
        src={Herofilm}
        autoPlay
        loop
        muted
        playsInline
        alt="A commercial for Grandiosa"
      />
      {/* <StyledFlexContainer> */}
     

        <StyledInfoContainer>
            <StyledContainer>
          <StyledH2>Intelligent by design </StyledH2>
          <StyledH3>
          We strive to create innovative workflows 
          while maintaining a traditional of flawless service and production.
          </StyledH3>

          </StyledContainer>
        </StyledInfoContainer>
      {/* </StyledFlexContainer> */}
    </StyledCaseContainer>
  );
};

export default Hero;
