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
  grid-template-columns: 34% 34% 34%;
  width: 100%;
`;

const StyledContentContainer = styled.div`
position: relative;
/* width: 50%; */
aspect-ratio: 3/4;
overflow: hidden;
`;

const StyledCaseVideo = styled.video`
  width: 250%;
  aspect-ratio: 16/9;
`;

const StyledImg = styled.img`
width: 100%;
  aspect-ratio: 3/4;
 
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

const StyledH4 = styled.h4`
align-self: center;
`;






const Case3 = () => {
  return (
    <StyledCaseContainer>

<StyledGridContainer> 
<StyledContentContainer>
   <StyledImg
          src={CaseImage}
          alt="A commercial for Grandiosa"
        />

      {/* <StyledFlexContainer> */}
     

        <StyledInfoContainer>
            <StyledContainer>
            <StyledH4>Intelligent by design </StyledH4>

          </StyledContainer>
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
      {/* <StyledFlexContainer> */}
     

        <StyledInfoContainer>
            <StyledContainer>
            <StyledH4>Intelligent by design </StyledH4>

          </StyledContainer>
        </StyledInfoContainer>

        </StyledContentContainer>

        <StyledContentContainer>
   <StyledImg
          src={CaseImage}
          alt="A commercial for Grandiosa"
        />

   
      {/* <StyledFlexContainer> */}
     

        <StyledInfoContainer>
            <StyledContainer>
          <StyledH4>Intelligent by design </StyledH4>
      

          </StyledContainer>
        </StyledInfoContainer>

        </StyledContentContainer>



      {/* </StyledFlexContainer> */}
      </StyledGridContainer>
    </StyledCaseContainer>
  );
};

export default Case3;
