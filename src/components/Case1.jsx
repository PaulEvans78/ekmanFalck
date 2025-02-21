import styled from "styled-components";
import Herofilm from "../assets/Grandiosa.mp4";
import ServiceProduction from "../assets/placeholder.png";


const StyledCaseContainer = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
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



const StyledGridContainer = styled.div`

  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
`;

const StyledContentContainer = styled.div`
position: relative;
/* width: 50%; */
aspect-ratio: 4/4;
overflow: hidden;
`;

const StyledHeroVideo = styled.video`
width: 200%;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

const StyledImg = styled.img`
width: 100%;
  aspect-ratio: 4/4;
`;

const StyledInfoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* aspect-ratio: 4/4; */
  color: var(--main-font-color);
  background-color: #02020230;
  /* padding-bottom: 16em; */
`;

// const StyledContainer = styled.div`
//   width: 100%;  
// `;

const StyledH4 = styled.h4`
/* align-self: flex-start; */
`;






const Hero = () => {
  return (
    <StyledCaseContainer>
    
      <StyledGridContainer>
     <StyledContentContainer>
     <StyledImg
        src={ServiceProduction}
        alt="A commercial for Grandiosa"
      />
        <StyledInfoContainer>
            {/* <StyledContainer> */}
          <StyledH4>
          Smart solutions,
          seamless integration.
          </StyledH4>

          {/* </StyledContainer> */}
        </StyledInfoContainer>
        </StyledContentContainer>

        <StyledContentContainer>
        <StyledHeroVideo
        src={Herofilm}
        autoPlay
        loop
        muted
        playsInline
        alt="A commercial for Grandiosa"
      />
      
        <StyledInfoContainer>
            {/* <StyledContainer> */}
          <StyledH4>
          Full service production
from Sweden to South Africa. 
          </StyledH4>

          {/* </StyledContainer> */}
        </StyledInfoContainer>
        </StyledContentContainer>
      </StyledGridContainer>
    </StyledCaseContainer>
  );
};

export default Hero;
