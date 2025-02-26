import styled from "styled-components";
import Casefilm from "../assets/Grandiosa.mp4";
import CaseImage from "../assets/placeholder.png";


const StyledCaseContainer = styled.div`
  /* position: relative; */
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
/* position: relative; */
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
 
}
`;

const StyledContentContainer = styled.div`
position: relative;
/* width: 50%; */
aspect-ratio: 4/4;
overflow: hidden;
`;

const StyledCaseVideo = styled.video`
position: relative;
width: 200%;
  aspect-ratio: 16/9;
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
  /* aspect-ratio: 4/4; */
  color: var(--main-font-color);
  background-color: #02020230;
  /* padding-bottom: 16em; */
  z-index: 10;

  @media screen and (max-width: 767px) {
    padding: 0em 4em 0em 4em;
}

@media screen and (max-width: 390px) {
    padding: 0em 1em 0em 1em;
}
`;

// const StyledContainer = styled.div`
//   width: 100%;  
// `;

const StyledH4 = styled.h4`
text-align: center;
`;






const Case1 = () => {
  return (
    <StyledCaseContainer>
    
      <StyledGridContainer>

     <StyledContentContainer>
     <StyledImg
        src={CaseImage}
        alt="A commercial for Grandiosa"
      />

        <StyledInfoContainer>
            
          <StyledH4>
          Smart solutions,
          seamless integration.
          </StyledH4>

          
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

export default Case1;
