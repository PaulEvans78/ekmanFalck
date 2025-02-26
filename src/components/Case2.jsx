import styled from "styled-components";
import Casefilm from "../assets/Grandiosa.mp4";


const StyledCaseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0%;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    aspect-ratio: 3 / 4;
}

   @media screen and (max-width: 767px) {
    aspect-ratio: 9 / 16;
}

/*
@media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 1em; 
    margin-bottom: 0em;
    aspect-ratio: 3 / 4;
} */
`;

const StyledCaseVideo = styled.video`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 250%;
 
}

@media screen and (max-width: 767px) {
    width: 320%;
}
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

  @media screen and (max-width: 1024px) {
    justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: 8em;
  /* justify-self: flex-end; */
  /* margin-top: 6em; */
 
}
`;

const StyledContainer = styled.div`

  width: 50%;  
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 6em;
  
  @media screen and (max-width: 1024px) {
    width: 70%;
}

@media screen and (max-width: 767px) {
    width: 90%;
    padding-left: 24px;
}
`;

const StyledSubheader = styled.p`
font-family: "helvetica Neue", sans-serif;
  font-size: 50px;
  line-height: 57px;
  letter-spacing: -2%;
  font-weight: bold;
  margin: 0;
align-self: flex-start;

@media screen and (max-width: 767px) {
  font-size: 28px;
}

@media screen and (max-width: 390px) {
  font-size: 24px;
}
`;

const Styledp = styled.p`
align-self: flex-start;
  width: 78%;

  @media screen and (max-width: 767px) {
    width: 90%;
}
`;




const Case2 = () => {
  return (
    <StyledCaseContainer>
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
          <StyledSubheader>Intelligent by design </StyledSubheader>
          <Styledp>
          We strive to create innovative workflows 
          while maintaining a traditional of flawless service and production.
          </Styledp>

          </StyledContainer>
        </StyledInfoContainer>
      {/* </StyledFlexContainer> */}
    </StyledCaseContainer>
  );
};

export default Case2;
